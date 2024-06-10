const assert = require("assert");
const sinon = require("sinon");
const bcrypt = require("bcrypt");
const controller = require("../../../api/controllers/AuthController");
const { mockAsync, RESPONSE, USER } = require("../../util/");

// Encrypt the example password
const hashedPassword = bcrypt.hashSync('password123', 10);

// Update the mock user with the encrypted password
USER.password = hashedPassword;

describe("AuthController", () => {

  it("Should log in successfully", async () => {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().callsFake((response) => response),
      redirect: sinon.stub(),
      ...RESPONSE
    };

    const req = {
      body: {
        email: USER.email,
        password: 'password123',
      },
      session: {} // Add the session to the request object
    };

    const findOneStub = mockAsync(User, 'findOne', USER);
    const compareStub = sinon.stub(bcrypt, 'compare').resolves(true);
    const user = { ...USER, password: bcrypt.hashSync('password123', 10) };

    await controller.login(req, res);

    assert.strictEqual(findOneStub.calledOnce, true);
    assert.strictEqual(compareStub.calledOnce, true);
    assert.strictEqual(res.redirect.calledWith('/homepage'), true);
    
    findOneStub.restore();
    compareStub.restore();
  });

  it("Should return a 400 error if the email is missing", async () => {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      ...RESPONSE
    };

    const req = {
      body: {
        // email: USER.email, // Remove the email to simulate it being missing
        password: USER.password,
      },
      session: {} // Add the session to the request object
    };

    const findOneStub = mockAsync(User, 'findOne', USER);
    await controller.login(req, res);

    assert.strictEqual(res.status.calledWith(400), true); // Check if res.status was called with 400
    assert.strictEqual(findOneStub.called, false);

    findOneStub.restore();
  });

  it("Should return a 400 error if the password is missing", async () => {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      ...RESPONSE
    };

    const req = {
      body: {
        email: USER.email,
        // password: USER.password,  // Remove the password to simulate it being missing
      },
      session: {} // Add the session to the request object
    };

    const findOneStub = mockAsync(User, 'findOne', USER);
    await controller.login(req, res);

    assert.strictEqual(res.status.calledWith(400), true); // Check if res.status was called with 400
    assert.strictEqual(findOneStub.called, false);

    findOneStub.restore();
  });

  it('Should return a 404 error when the user is not found', async () => {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      ...RESPONSE
    };

    const req = {
      body: {
        email: USER.email,
        password: USER.password,
      },
      session: {} // Add the session to the request object
    };
    const findOneStub = mockAsync(User, 'findOne', USER).resolves(null);

    await controller.login(req, res);
    assert.strictEqual(res.status.calledWith(404), true);

    findOneStub.restore();
  });

  it('Should return a 403 error when the password is invalid', async () => {
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      ...RESPONSE
    };
  
    const req = {
      body: {
        email: USER.email, 
        password: 'wrongpassword',
      },
      session: {} // Add the session to the request object
    };
  
    const findOneStub = mockAsync(User, 'findOne', USER);
    await controller.login(req, res);
  
    assert.strictEqual(res.status.calledWith(403), true); // Check if RESPONSE.status was called with 403
    assert.strictEqual(findOneStub.calledOnce, true);

    findOneStub.restore();
  });

  it("Should return a 500 error in case of an unexpected error", async () => {
    const req = {
      body: {
        email: USER.email,
        password: 'password123',
      },
      session: {}
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
      ...RESPONSE
    };

    const findOneStub = mockAsync(User, 'findOne', USER);

    await controller.login(req, res);

    assert.strictEqual(findOneStub.calledOnce, true);
    assert(res.status.calledWith(500), true);

    findOneStub.restore();
  });
  
});
