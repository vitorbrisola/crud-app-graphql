/**
 * @flow
 * @relayHash 8e4f6f720c92289fc1866f8f84bdc043
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type questionsQueryVariables = {||};
export type questionsQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +id: string,
    +description: ?string,
  |}>
|};
export type questionsQuery = {|
  variables: questionsQueryVariables,
  response: questionsQueryResponse,
|};
*/


/*
query questionsQuery {
  questions {
    id
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "questions",
    "storageKey": null,
    "args": null,
    "concreteType": "question",
    "plural": true,
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
    "name": "questionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "questionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "questionsQuery",
    "id": null,
    "text": "query questionsQuery {\n  questions {\n    id\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '285655461a4a3efbccd2f6e85b8b21e3';
module.exports = node;
