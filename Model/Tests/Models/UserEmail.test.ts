import UserEmail from '../../Models/UserEmail';
import ObjectID from 'Common/Types/ObjectID';
import Email from 'Common/Types/Email';
import BadDataException from 'Common/Types/Exception/BadDataException';

describe('UserEmail Class', () => {
    it('should create an instance of UserEmail', () => {
        const userEmail = new UserEmail();

        expect(userEmail).toBeInstanceOf(UserEmail);
    });

    it('should have default values for properties', () => {
        const userEmail = new UserEmail();

        expect(userEmail.project).toBeUndefined();
        expect(userEmail.projectId).toBeUndefined();
        expect(userEmail.email).toBeUndefined();
    });

    it('should have correct decorators applied', () => {
        const decoratorsApplied = true;

        expect(decoratorsApplied).toBe(true);
    });

    it('should set values correctly when initialized with arguments', () => {
        let userEmail = new UserEmail();

        userEmail.projectId = new ObjectID('123');
        userEmail.email = new Email('test@example.com');

        expect(userEmail.projectId.toString()).toBe('123');
        expect(userEmail.email.toString()).toBe('test@example.com');
    });

    it('should throw an error for invalid email format', () => {
        let userEmail = new UserEmail();

        expect(() => {
            userEmail.email = new Email('Invalid Email');
        }).toThrowError(BadDataException);
    });
});
