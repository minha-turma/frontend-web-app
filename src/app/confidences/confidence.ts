import { Entity } from '../commons/model/Entity';
import { getStringProperty } from '../commons/util';
import { Subject } from '../subjects/subject';
import { User } from '../users/user';

export class Confidence extends Entity {

    id: number;
    status: String;
    subject: Subject;
    student: User;

    constructor(data?) {
        super(data);
        this.status = data ? data.status : undefined;
        this.subject = data ? data.subject : undefined;
        this.student = data ? data.student : undefined;
    }

    validate(): boolean {
        return this.status !== undefined && this.subject !== undefined && this.student !== undefined;
    }
}
