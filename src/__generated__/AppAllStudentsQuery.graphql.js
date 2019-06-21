/**
 * @flow
 * @relayHash bc7ed4528b4c8af3f97d14d9639fc704
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Students_students$ref = any;
export type AppAllStudentsQueryVariables = {||};
export type AppAllStudentsQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: Students_students$ref
  |}
|};
export type AppAllStudentsQuery = {|
  variables: AppAllStudentsQueryVariables,
  response: AppAllStudentsQueryResponse,
|};
*/


/*
query AppAllStudentsQuery {
  viewer {
    ...Students_students
    id
  }
}

fragment Students_students on Viewer {
  ...Student_viewer
  allStudents(last: 100) {
    edges {
      node {
        ...Student_student
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Student_viewer on Viewer {
  id
}

fragment Student_student on Student {
  id
  rollNo
  name
  age
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppAllStudentsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
          {
            "kind": "FragmentSpread",
            "name": "Students_students",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppAllStudentsQuery",
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allStudents",
            "storageKey": "allStudents(last:100)",
            "args": (v1/*: any*/),
            "concreteType": "StudentConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "StudentEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Student",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "rollNo",
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
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allStudents",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "Students_allStudents",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppAllStudentsQuery",
    "id": null,
    "text": "query AppAllStudentsQuery {\n  viewer {\n    ...Students_students\n    id\n  }\n}\n\nfragment Students_students on Viewer {\n  ...Student_viewer\n  allStudents(last: 100) {\n    edges {\n      node {\n        ...Student_student\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Student_viewer on Viewer {\n  id\n}\n\nfragment Student_student on Student {\n  id\n  rollNo\n  name\n  age\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eebdf8ac370a58206c69e7d313e12dd2';
module.exports = node;
