/**
 * @flow
 * @relayHash b0bf9fa9c71d5aa8bb1e049a204337ce
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateStudentQueryVariables = {|
  id: string
|};
export type UpdateStudentQueryResponse = {|
  +viewer: {|
    +Student: ?{|
      +id: string,
      +name: string,
      +age: number,
      +rollNo: number,
    |}
  |}
|};
export type UpdateStudentQuery = {|
  variables: UpdateStudentQueryVariables,
  response: UpdateStudentQueryResponse,
|};
*/


/*
query UpdateStudentQuery(
  $id: ID!
) {
  viewer {
    Student(id: $id) {
      id
      name
      age
      rollNo
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "Student",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }
  ],
  "concreteType": "Student",
  "plural": false,
  "selections": [
    (v1/*: any*/),
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateStudentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateStudentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UpdateStudentQuery",
    "id": null,
    "text": "query UpdateStudentQuery(\n  $id: ID!\n) {\n  viewer {\n    Student(id: $id) {\n      id\n      name\n      age\n      rollNo\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'abd8903d95a87af768338128df9b28ca';
module.exports = node;
