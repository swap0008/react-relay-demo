/**
 * @flow
 * @relayHash c9fac99143c786f249fd7451dfa57bec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateStudentInput = {|
  age?: ?number,
  id: string,
  name?: ?string,
  rollNo?: ?number,
  clientMutationId: string,
|};
export type UpdateStudentMutationVariables = {|
  input: UpdateStudentInput
|};
export type UpdateStudentMutationResponse = {|
  +updateStudent: ?{|
    +student: ?{|
      +id: string,
      +name: string,
      +age: number,
      +rollNo: number,
    |}
  |}
|};
export type UpdateStudentMutation = {|
  variables: UpdateStudentMutationVariables,
  response: UpdateStudentMutationResponse,
|};
*/


/*
mutation UpdateStudentMutation(
  $input: UpdateStudentInput!
) {
  updateStudent(input: $input) {
    student {
      id
      name
      age
      rollNo
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateStudent",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateStudentPayload",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "age",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rollNo",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateStudentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateStudentMutation",
    "id": null,
    "text": "mutation UpdateStudentMutation(\n  $input: UpdateStudentInput!\n) {\n  updateStudent(input: $input) {\n    student {\n      id\n      name\n      age\n      rollNo\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'acf7150b01e6013ea0cc69be6e2e5e95';
module.exports = node;
