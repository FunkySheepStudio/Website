<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      Step by step
    </p>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Prerequisites
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Install the server
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="e1 > 3"
          step="3"
        >
          Install the client
        </v-stepper-step>
        <v-divider />
        <v-stepper-step step="4">
          Connect everything
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <p
            class="text-center text-h4"
          >
            Prerequisites
          </p>
          <v-timeline
            dense
          >
            <v-timeline-item
              icon="mdi-nodejs"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  NodeJS
                </v-card-title>
                <v-card-text>
                  Requiered to launch the multiplayers server
                  <br>
                  <br>
                  <a href="https://nodejs.dev/">https://nodejs.dev/</a>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="mdi-git"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Git
                </v-card-title>
                <v-card-text>
                  Requiered to download the sources for Github and to contribute :)
                  <br>
                  <br>
                  <a href="https://git-scm.com/">https://git-scm.com/</a>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="mdi-unity"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Unity 3D
                </v-card-title>
                <v-card-text>
                  Requiered to create awesome games!
                  <br>
                  <br>
                  <a href="https://unity.com/">https://unity.com/</a>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Next
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <p
            class="text-center text-h4"
          >
            Install the server
          </p>
          <v-timeline
            dense
          >
            <v-timeline-item
              icon="1"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Download the sources
                </v-card-title>
                <v-card-text>
                  Run this command in a terminal
                  <br>
                  <div class="computerGreen">
                    <code>
                      git clone https://github.com/FunkySheepStudio/Server.git
                    </code>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="2"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Enter the "Server" directory
                </v-card-title>
                <v-card-text>
                  Run this command in a terminal
                  <br>
                  <div class="computerGreen">
                    <code>
                      cd Server
                    </code>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="3"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Install the dependencies
                </v-card-title>
                <v-card-text>
                  Run this command in a terminal
                  <br>
                  <div class="computerGreen">
                    <code>
                      npm install
                    </code>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="4"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Launch the dev server
                </v-card-title>
                <v-card-text>
                  Run this command in a terminal
                  <br>
                  <div class="computerGreen">
                    <code>
                      npm run dev
                    </code>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="4"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Open the server webpage
                </v-card-title>
                <v-card-text>
                  Open this url in a browser
                  <br>
                  <a href="http://localhost:8080">http://localhost:8080</a>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Back
          </v-btn>
          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Next
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <p
            class="text-center text-h4"
          >
            Install the client
          </p>
          <v-timeline
            dense
          >
            <v-timeline-item
              icon="1"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Download the sources
                </v-card-title>
                <v-card-text>
                  Run this command in a terminal
                  <br>
                  <div class="computerGreen">
                    <code>
                      git clone https://github.com/FunkySheepStudio/Client.git
                    </code>
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="2"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Add in Unity Hub
                </v-card-title>
                <v-img
                  max-width="1000"
                  src="/img/unity-hub-client.png"
                />
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="3"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Open the client
                </v-card-title>
                <v-card-text>
                  Open the client in Unity 3D, it contain the library and some examples.
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Back
          </v-btn>
          <v-btn
            color="primary"
            @click="e1 = 4"
          >
            Next
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <p
            class="text-center text-h4"
          >
            Connect everything
          </p>
          <v-timeline
            dense
          >
            <v-timeline-item
              icon="1"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Get the browser user ID
                </v-card-title>
                <v-card-text>
                  On the server website, go to 'management' then 'users'
                  <br>
                  You should have just one line with the connected user ID. Copy it.
                  <br>
                  It will be used in the client to sync the users.
                  <br>
                  <v-img
                    max-width="1000"
                    src="/img/unity-hub-client-copy-id.png"
                  />
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="2"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Set the user ID in the client
                </v-card-title>
                <v-card-text>
                  On the Unity 3D client, go to 'Assets', 'User', 'Variables'.
                  <br>
                  Select the '_id' gameobject and past the previously copied value in the inspector.
                  <br>
                  <v-img
                    max-width="1000"
                    src="/img/unity-hub-client-past-id.png"
                  />
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              icon="3"
            >
              <v-card
                shaped
                elevation="5"
              >
                <v-card-title
                  class="text-subtitle-2"
                >
                  Run the examples
                </v-card-title>
                <v-card-text>
                  You can now run one of the examples scenes in 'Assets', 'Examples'.
                  <br>
                  Return to the server website and in 'Examples' menu you will be able to see some capabilities of the framework.
                  <br>
                  There is some easter eggs, find them ;)
                  <br>
                  That's it for you first steps.
                  <br>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Back
          </v-btn>
          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Baby one more time...
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      e1: 1
    }
  }
}
</script>
<style scoped>
code {
  font-size: medium;
  font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
  width: 100%;
  display: inline-block;
}

.computerGreen {
  background-color: #000000;
  color: rgb(78, 255, 78);}
</style>
