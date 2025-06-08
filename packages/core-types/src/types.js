/**
 * @title A2A
 */
// --8<-- [end:MessageSendParams]
// --8<-- [start:TaskState]
/** Represents the possible states of a Task. */
export var TaskState;
(function (TaskState) {
    TaskState["Submitted"] = "submitted";
    TaskState["Working"] = "working";
    TaskState["InputRequired"] = "input-required";
    TaskState["Completed"] = "completed";
    TaskState["Canceled"] = "canceled";
    TaskState["Failed"] = "failed";
    TaskState["Rejected"] = "rejected";
    TaskState["AuthRequired"] = "auth-required";
    TaskState["Unknown"] = "unknown";
})(TaskState || (TaskState = {}));
// --8<-- [end:A2AError]
