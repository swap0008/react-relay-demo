/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Student_viewer$ref: FragmentReference;
declare export opaque type Student_viewer$fragmentType: Student_viewer$ref;
export type Student_viewer = {|
  +id: string,
  +$refType: Student_viewer$ref,
|};
export type Student_viewer$data = Student_viewer;
export type Student_viewer$key = {
  +$data?: Student_viewer$data,
  +$fragmentRefs: Student_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Student_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7c68000c13cdd851bfc26058e7d6e8b9';
module.exports = node;
