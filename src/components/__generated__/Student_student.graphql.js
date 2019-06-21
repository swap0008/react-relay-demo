/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Student_student$ref: FragmentReference;
declare export opaque type Student_student$fragmentType: Student_student$ref;
export type Student_student = {|
  +id: string,
  +rollNo: number,
  +name: string,
  +age: number,
  +$refType: Student_student$ref,
|};
export type Student_student$data = Student_student;
export type Student_student$key = {
  +$data?: Student_student$data,
  +$fragmentRefs: Student_student$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Student_student",
  "type": "Student",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd513c58d3ca646bbb6772cc32addc29d';
module.exports = node;
