/**
 * @flow
 * @relayHash 24c93ee2c40434c174867eae532996bd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateStudentInput = {|
  age: number,
  name: string,
  rollNo: number,
  clientMutationId: string,
|};
export type AddDetailMutationVariables = {|
  input: CreateStudentInput
|};
export type AddDetailMutationResponse = {|
  +createStudent: ?{|
    +student: ?{|
      +rollNo: number,
      +name: string,
      +age: number,
    |}
  |}
|};
export type AddDetailMutation = {|
  variables: AddDetailMutationVariables,
  response: AddDetailMutationResponse,
|};
*/


/*
mutation AddDetailMutation(
  $input: CreateStudentInput!
) {
  createStudent(input: $input) {
    student {
      rollNo
      name
      age
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rollNo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddDetailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createStudent",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateStudentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "student",
            "storageKey": null,
            "args": null,
            "concreteType": "Student",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddDetailMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createStudent",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateStudentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "student",
            "storageKey": null,
            "args": null,
            "concreteType": "Student",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddDetailMutation",
    "id": null,
    "text": "mutation AddDetailMutation(\n  $input: CreateStudentInput!\n) {\n  createStudent(input: $input) {\n    student {\n      rollNo\n      name\n      age\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f8d1146509650b619050b6c5a245089c';
module.exports = node;
