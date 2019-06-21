/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Student_student$ref = any;
type Student_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Students_students$ref: FragmentReference;
declare export opaque type Students_students$fragmentType: Students_students$ref;
export type Students_students = {|
  +allStudents: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Student_student$ref
      |}
    |}>
  |},
  +$fragmentRefs: Student_viewer$ref,
  +$refType: Students_students$ref,
|};
export type Students_students$data = Students_students;
export type Students_students$key = {
  +$data?: Students_students$data,
  +$fragmentRefs: Students_students$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Students_students",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "allStudents"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allStudents",
      "name": "__Students_allStudents_connection",
      "storageKey": null,
      "args": null,
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Student_student",
                  "args": null
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
      "kind": "FragmentSpread",
      "name": "Student_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75f3b3344ce1f2eb937f56fe44d9ddcb';
module.exports = node;
