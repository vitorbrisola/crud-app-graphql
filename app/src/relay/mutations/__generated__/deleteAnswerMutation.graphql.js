/**
 * @flow
 * @relayHash 37c0c205a6e77c79b94c6238add6ce17
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteAnswerMutationVariables = {|
  input: string
|};
export type deleteAnswerMutationResponse = {|
  +deleteAnswer: ?{|
    +id: string
  |}
|};
export type deleteAnswerMutation = {|
  variables: deleteAnswerMutationVariables,
  response: deleteAnswerMutationResponse,
|};
*/


/*
mutation deleteAnswerMutation(
  $input: ID!
) {
  deleteAnswer(id: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Answer",
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
    "name": "deleteAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteAnswerMutation",
    "id": null,
    "text": "mutation deleteAnswerMutation(\n  $input: ID!\n) {\n  deleteAnswer(id: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4c7d94faf16c2ef1e7a6b85474c16575';
module.exports = node;
