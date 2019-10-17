/**
 * Copyright 2019, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START cloudbuild_quickstart]
async function quickstart(
  projectId = 'YOUR_PROJECT_ID', // Your Google Cloud Platform project ID
  triggerId = 'YOUR_TRIGGER_ID', // UUID for build trigger.
  branchName = 'BRANCH_TO_BUILD' // Branch to run build against.
) {
  // Imports the Google Cloud client library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild');

  // Creates a client
  const cb = new CloudBuildClient();

  // Starts a build against the branch provided.
  const request = {
    projectId,
    triggerId,
    source: {
      projectId: projectId,
      dir: './',
      branchName,
    },
  };
  await cb.runBuildTrigger(request);
  console.info(`triggered build for ${triggerId}`);
}
// [END cloudbuild_quickstart]

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);
