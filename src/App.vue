<script setup lang="ts"></script>

<template>
  <div class="h-full w-screen bg-skyBlue-500 font-sans text-base sm:text-lg">
    <div class="header">
      <flex class="flex flex-row">
        <img src="./assets/christmas-lights-short.png" class="w-1/4" />
        <img src="./assets/christmas-lights-short-reversed.png" class="w-1/4" />
        <img src="./assets/christmas-lights-short.png" alt="" class="w-1/4" />
        <img src="./assets/christmas-lights-short-reversed.png" class="w-1/4" />
      </flex>
    </div>

    <div class="mx-auto pb-10 pt-6">
      <div class="max-w-6xl mx-6 sm:mx-auto rounded-t-lg shadow-xl bg-skyBlue-500 sm:-mt-32">
        <header class="mx-auto text-center z-100">
          <img src="./assets/christmas-in-cotuit.png" alt="Christmas in Cotuit" class="w-1/2 mx-auto" />
          <h1 class="text-xl sm:text-3xl my-4 text-white font-christmas">Saturday, December 7th, 2024</h1>
        </header>

        <main class="bg-gray-100 p-4 sm:pt-10 sm:px-10 sm:pb-4 h-full">
          <div class="grid grid-cols-1 gap-y-10">
            <div class="col-span-1 rounded-lg shadow-md p-6 bg-indigo-50 text-center">
              <div>
                <img src="./assets/santa-town-dock.jpg" alt="" class="my-6 border-[20px] border-white rounded-lg shadow-sm" />
              </div>
            </div>

            <!-- <div class="col-span-1 rounded-lg shadow-md p-6 bg-red-50 text-center border-t-2 border-red-500 border-b-2 border-b-red-500">
              <h2 class="text-4xl font-christmas text-red-600">Important Announcement</h2>

              <p class="text-red-500 mb-3 mt-2 text-xl text-left">
                All <span class="font-bold uppercase">indoor events will still be occurring on Saturday as scheduled</span> at HSSC, Library, Fire
                Department, Cahoon, Artisan Craft Show at Freedom Hall, Cotuit Fresh Market Main Street Tastings, and the Cotuit Kettleers Store.
              </p>

              <p class="text-red-500 mb-3 mt-2 text-xl text-left">
                SANTA's arrival at Town Dock and the lighting of the Christmas tree has been RESCHEDULED to SUNDAY December 4th at 3:45 (same time).
              </p>

              <p class="text-red-500 mb-3 mt-2 text-xl text-left">We hope everyone will still be able to come and enjoy this festive celebration.</p>
            </div>  -->

            <div class="col-span-1 rounded-lg shadow-md p-6 bg-indigo-50 text-center">
              <h2 class="text-4xl text-gray-900 font-christmas">Food and Diaper Drive</h2>
              <h2 class="text-2xl text-gray-600 mt-1 font-christmas">Monday, December 2nd through Saturday, December 7th</h2>
              <p class="text-gray-500 mb-3 mt-2 text-lg">
                Our Diapers and Wipes Drive to benefit the Housing Assistance Corporation and A Baby Center runs from Monday, December 2 through
                Saturday, December 7. You may drop off donations at the
                <a href="https://goo.gl/maps/YYpZbXFULAqtYQH47" target="_blank" class="text-red-400 hover:underline">Cotuit Fire Station</a> all week,
                or bring them to the Community Hall at Cotuit Federated Church on December 7.
              </p>
              <p class="text-gray-500 mb-3 mt-2 text-lg"></p>
            </div>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex flex-col">
                <div class="text-green-600 text-4xl font-christmas">Tree Decorating</div>
                <div class="text-gray-500 text-lg">
                  Villagers can bring ornaments to place on the village tree beginning the day after Thanksgiving (Friday, November 29th). Please avoid placing
                  ornaments on lighting wires. All ornaments should be removed by Saturday, January 4th.
                </div>
              </div>

              <div class="">
                <img src="./assets/christmas-tree.png" alt="Christmas Tree" class="w-1/2 mx-auto" />
              </div>
            </div>
          </div>

          <flex class="flex flex-row w-full mt-20">
            <img src="./assets/christmas-lights-short.png" class="w-1/4" />
            <img src="./assets/christmas-lights-short-reversed.png" class="w-1/4" />
            <img src="./assets/christmas-lights-short.png" alt="" class="w-1/4" />
            <img src="./assets/christmas-lights-short-reversed.png" class="w-1/4" />
          </flex>

          <div class="text-center text-red-500 px-10 sm:px-0 text-3xl sm:text-4xl mt-14 font-christmas">
            Saturday, December 7th Schedule of Events
          </div>
          <div class="flex flex-col mb-6 mt-2 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">10:00am</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am - 3:00pm</div>
                  <div class="text-gray-500">
                    Historical Society: Bring the kids to paint a wooden ornament for your tree (until noon). Play lawn games and enjoy roasted
                    marshmallows, cider, and s’mores around the firepit until 3:00.
                  </div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 3:00pm</div>
                  <div class="text-gray-500">
                    Cotuit Federated Church: the Women's Fellowship Gift Basket sale (until 2:00) and the 23rd annual show and sale of small works by
                    local artists and photographers. Give art for the holidays.
                  </div>
                </div>
              </li>
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 4:00pm</div>
                  <div class="text-gray-500">
                    Artisan Craft Fair at Freedom Hall: artists, pottery, jewelry, wreaths, shell art, soaps, honey, and much more
                  </div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 4:00pm</div>
                  <div class="text-gray-500">
                    Winter Open House at the Cahoon Museum. Explore amazing exhibits, try your hand at holiday art projects, and enjoy seasonal
                    treats. Free admission.
                  </div>
                </div>
              </li>

              <!-- <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 4:00pm</div>
                  <div class="text-gray-500">
                    Visit the Historical Society Gift Shop for new and unique items for the holidays. 20% discount on home décor items.
                  </div>
                </div>
              </li> -->
            </ul>
          </div>

          <!-- <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">10:30am</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:30am - 1:30pm</div>
                  <div class="text-gray-500">
                    All aboard the Cotuit Library Polar Express. First stop: Decorate cookies and fill up on hot chocolate with Santa’s many helpers.
                  </div>
                </div>
              </li>
            </ul>
          </div> -->

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div class="text-green-600 text-4xl font-christmas">11:00am</div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">11:00am - 3:00pm</div>
                  <div class="text-gray-500">
                    Cotuit Library: Bring the kids to decorate cookies and fill up on hot chocolate, then participate in a scavenger hunt.
                  </div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">11:00am - 1:00pm</div>
                  <div class="text-gray-500">Bring your holiday gift list to the Cotuit Kettleers Store for some Kettleers merch or a personalized paver to be placed in our Walk of
                    Champions.</div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">11:00am – 5:00pm</div>
                  <div class="text-gray-500">Cotuit Fresh Market Main Street Tastings</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">12:00pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">12:00pm - 2:00pm</div>
                  <div class="text-gray-500">Cotuit Fire Station Open House. Stop by for chili and learn more about plans for the new firehouse.</div>
                </div>
              </li>
            </ul>
          </div>

          <!-- <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">1:30pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">1:30pm - 2:30pm</div>
                  <div class="text-gray-500">
                    Cotuit Library, next stop: Escape from Santa’s workshop. Compete in challenges and follow clues to find Santa’s missing sleigh
                    bell.
                  </div>
                </div>
              </li>
            </ul>
          </div> -->

          <!-- <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">2:30pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">2:30pm - 3:30pm</div>
                  <div class="text-gray-500">
                    Cotuit Library, final stop: Play Christmas trivia and win prizes. Children who participate in all three “stops” can choose their
                    first gift of Christmas.
                  </div>
                </div>
              </li>
            </ul>
          </div> -->

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">3:00pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">3:00pm - 5:00pm</div>
                  <div class="text-gray-500">Hot chocolate in Memorial Park, courtesy of Cotuit Fresh Market</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">3:30pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">3:30pm</div>
                  <div class="text-gray-500">
                    At the Town Dock: DJ Lisa Z and Pizza by Zoe Pizza of Mashpee, courtesy of the Cotuit-Santuit Civic Association
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">3:45pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">3:45pm</div>
                  <div class="text-gray-500">
                    Santa’s arrival by boat at the Town Dock, followed by tree lighting (lights installed by Bartlett Tree) and visits with Santa in
                    Memorial Park
                  </div>

                  <!-- <div>
                    <img src="./assets/santa-town-dock.jpg" alt="" class="my-6 border-[20px] border-white rounded-lg shadow-sm" />
                  </div> -->
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-44 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">4:00pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">4:00pm-5:00pm</div>
                  <div class="text-gray-500">
                    Open House with cookies in the Cotuit Federated Church Community Hall. Enter from High Street or through the patio doors from
                    Memorial Park.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <flex class="flex flex-row w-full mt-20">
            <img src="./assets/christmas-lights-short.png" class="hidden sm:block sm:w-1/4" />
            <img src="./assets/christmas-lights-short-reversed.png" class="hidden sm:block sm:w-1/4" />
            <img src="./assets/christmas-lights-short.png" alt="" class="hidden sm:block sm:w-1/4" />
            <img src="./assets/christmas-lights-short-reversed.png" class="hidden sm:block sm:w-1/4" />
          </flex>

          <div class="-mt-40 w-full">
            <div class="flex flex-row items-baseline">
              <div class="sm:w-1/3 hidden sm:block">
                <img src="./assets/lamp-post.png" class="h-96 items-end ml-60" />
              </div>
              <div class="w-full sm:w-1/3">
                <img src="./assets/ginger-bread.png" class="mx-auto w-full" />
              </div>
              <div class="sm:w-1/3 hidden sm:block">
                <img src="./assets/lamp-post.png" class="h-96 ml-16" />
              </div>
            </div>
          </div>

          <!-- <div class="mt-10">
            <p class="text-gray-500 text-right">
              Illustrations by <span class="text-green-600">Carina Haythorn</span>,
              <a href="https://www.capetechdvc.com/" target="_blank" class="text-red-500">Cape Tech DVC</a>
            </p>
          </div> -->
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
