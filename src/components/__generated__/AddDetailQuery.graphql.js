/**
 * @flow
 * @relayHash 48a1a8ae3c42d8918c19e7324c5803d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddDetailQueryVariables = {||};
export type AddDetailQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type AddDetailQuery = {|
  variables: AddDetailQueryVariables,
  response: AddDetailQueryResponse,
|};
*/


/*
query AddDetailQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "AddDetailQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddDetailQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AddDetailQuery",
    "id": null,
    "text": "query AddDetailQuery {\n  viewer {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd51d39a6b110b834d1ff1f349d2a7626';
module.exports = node;
