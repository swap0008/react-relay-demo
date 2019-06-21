/**
 * @flow
 * @relayHash 7dde89d34674d41e39aabddfa62d28da
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteStudentInput = {|
  id: string,
  clientMutationId: string,
|};
export type DeleteStudentMutationVariables = {|
  input: DeleteStudentInput
|};
export type DeleteStudentMutationResponse = {|
  +deleteStudent: ?{|
    +deletedId: ?string
  |}
|};
export type DeleteStudentMutation = {|
  variables: DeleteStudentMutationVariables,
  response: DeleteStudentMutationResponse,
|};
*/


/*
mutation DeleteStudentMutation(
  $input: DeleteStudentInput!
) {
  deleteStudent(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteStudent",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteStudentPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteStudentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteStudentMutation",
    "id": null,
    "text": "mutation DeleteStudentMutation(\n  $input: DeleteStudentInput!\n) {\n  deleteStudent(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd906bc2afa554dc2cde2676bf8fb98c6';
module.exports = node;
