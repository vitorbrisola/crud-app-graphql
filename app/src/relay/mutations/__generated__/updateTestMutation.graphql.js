/**
 * @flow
 * @relayHash 19cf2d4a65ec4ff962a8bd4d79e8bf2a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type upTestInput = {|
  id: string,
  questions: $ReadOnlyArray<?string>,
|};
export type updateTestMutationVariables = {|
  input: upTestInput
|};
export type updateTestMutationResponse = {|
  +updateTest: ?{|
    +id: string
  |}
|};
export type updateTestMutation = {|
  variables: updateTestMutationVariables,
  response: updateTestMutationResponse,
|};
*/


/*
mutation updateTestMutation(
  $input: upTestInput!
) {
  updateTest(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "upTestInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateTest",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Test",
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
    "name": "updateTestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateTestMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateTestMutation",
    "id": null,
    "text": "mutation updateTestMutation(\n  $input: upTestInput!\n) {\n  updateTest(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '07032508130c2cd943cf3742ecb4e8a2';
module.exports = node;
