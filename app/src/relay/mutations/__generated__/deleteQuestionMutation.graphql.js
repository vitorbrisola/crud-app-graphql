/**
 * @flow
 * @relayHash fa9e24bcc5e401898105edd1d386e740
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteQuestionMutationVariables = {|
  input: string
|};
export type deleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +id: string,
    +description: ?string,
  |}
|};
export type deleteQuestionMutation = {|
  variables: deleteQuestionMutationVariables,
  response: deleteQuestionMutationResponse,
|};
*/


/*
mutation deleteQuestionMutation(
  $input: String!
) {
  deleteQuestion(id: $input) {
    id
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Question",
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
        "name": "description",
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
    "name": "deleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteQuestionMutation",
    "id": null,
    "text": "mutation deleteQuestionMutation(\n  $input: String!\n) {\n  deleteQuestion(id: $input) {\n    id\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '437a5a5e11fa9682c0418f0291f21348';
module.exports = node;
