const assert = require('assert');
const sinon = require('sinon');
const bcrypt = require('bcrypt');
const UserController = require('../../../api/controllers/UsuarioController');
const { mockAsync, RESPONSE, USER } = require("../../util/");

describe('UserController', () => {

    describe('create', () => {

        let req, res, userCreateStub, hashStub;

        // Set up the test environment before each test
        beforeEach(() => {
            // Mock request object
            req = {
                body: {
                    firstName: 'João',
                    lastName: 'Silva',
                    email: 'joao.silva@example.com',
                    password: 'password123',
                    university: 'Universidade XYZ',
                    nationality: 'Brasileiro'
                },
                session: {}
            };

            // Mock response object
            res = {
                redirect: sinon.spy(), // spy to monitor calls to redirect
                status: sinon.stub().returns({ json: sinon.spy() }) // stub status method to return an object with a json spy
            };

            // Stub User.create to return a resolved promise with a mocked user object
            userCreateStub = sinon.stub(User, 'create').returns({
                fetch: () => Promise.resolve({ id: 1, ...req.body })
            });

            // Stub bcrypt.hash to return a resolved promise with a hashed password
            hashStub = sinon.stub(bcrypt, 'hash').resolves('hashed_password');
        });

        // Clean up the stubs after each test
        afterEach(() => {
            userCreateStub.restore();
            hashStub.restore();
        });

        it('should create a user successfully and save the information to the database', async () => {
            await UserController.create(req, res);

            // Check if User.create was called once with the correct data
            assert(userCreateStub.calledOnce);
            const args = userCreateStub.getCall(0).args[0];
            assert.strictEqual(args.firstName, req.body.firstName);
            assert.strictEqual(args.lastName, req.body.lastName);
            assert.strictEqual(args.email, req.body.email);
            assert.strictEqual(args.university, req.body.university);
            assert.strictEqual(args.nationality, req.body.nationality);
            assert.strictEqual(req.session.userId, 1);
            assert(res.redirect.calledWith('/login')); // Check if redirect was called with '/login'
        });

        it('should hash the password before saving to the database', async () => {
            await UserController.create(req, res);

            // Check if bcrypt.hash was called once with the correct password and salt rounds
            assert(hashStub.calledOnceWith('password123', 10));

            // Check if User.create was called with the hashed password
            const args = userCreateStub.getCall(0).args[0];
            assert.strictEqual(args.password, 'hashed_password');
        });
    });
});
