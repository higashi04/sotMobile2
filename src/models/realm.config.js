import { Realm, createRealmContext } from "@realm/react";

export class customer {
    constructor({id = new Realm.BSON.ObjectID(), username, company, email, firstName, lastName}) {
        this._id = id,
        this.username = username,
        this.company = company,
        this.email = email,
        this.firstName = firstName,
        this.lastName = lastName
    }

    static schema = {
        name: 'customer',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            username: 'string',
            company: 'string',
            email: 'string',
            firstName: 'string',
            lastName: 'string'
        }
    }
}

export default createRealmContext({
    schema: [customer.schema],
    deleteRealmIfMigrationNeeded: true
})