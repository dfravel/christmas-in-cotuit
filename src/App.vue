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
          <h1 class="text-xl sm:text-3xl my-4 text-white font-christmas">Saturday, December 3rd, 2022</h1>
        </header>

        <main class="bg-gray-100 p-4 sm:pt-10 sm:px-10 sm:pb-4 h-full">
          <div class="grid grid-cols-1 gap-y-10">
            <div class="col-span-1 rounded-lg shadow-md p-6 bg-red-50 text-center border-t-2 border-red-500 border-b-2 border-b-red-500">
              <h2 class="text-4xl font-christmas text-red-600">Important Announcement</h2>

              <p class="text-red-500 mb-3 mt-2 text-xl text-left">
                All <span class="font-bold uppercase">indoor events will still be occurring on Saturday as scheduled</span> at HSSC, Library, Fire
                Department, Cahoon, Artisan Craft Show at Freedom Hall, Cotuit Fresh Market Main Street Tastings, and the Cotuit Kettleers Store.
              </p>

              <p class="text-red-500 mb-3 mt-2 text-xl text-left">
                SANTA's arrival at Town Dock and the lighting of the Christmas tree has been RESCHEDULED to SUNDAY December 4th at 3:45 (same time).
              </p>

              <p class="text-red-500 mb-3 mt-2 text-xl text-left">We hope everyone will still be able to come and enjoy this festive celebration.</p>
            </div>

            <div class="col-span-1 rounded-lg shadow-md p-6 bg-indigo-50 text-center">
              <h2 class="text-4xl text-gray-900 font-christmas">Food and Diaper Drive</h2>
              <h2 class="text-2xl text-gray-600 mt-1 font-christmas">Wednesday, November 30th and Thursday, December 1st</h2>
              <p class="text-gray-500 mb-3 mt-2 text-lg">
                We're holding a food and diaper drive to benefit the Cotuit Federated Church, Christ the King Food Pantry, and Housing Assistance
                Corporation. Please bring non-perishable food items and diapers to the
                <a href="https://goo.gl/maps/YYpZbXFULAqtYQH47" target="_blank" class="text-red-400 hover:underline">Fire Station</a> or
                <a href="https://goo.gl/maps/EEK7bnubQzbSn9eZ8" target="_blank" class="text-red-400 hover:underline">Freedom Hall</a> on Wednesday,
                November 30th and Thursday, December 1st between 4pm and 7pm.
              </p>
              <p class="text-gray-500 mb-3 mt-2 text-lg"></p>
            </div>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex flex-col">
                <div class="text-green-600 text-4xl font-christmas">Tree Decorating</div>
                <div class="text-gray-500 text-lg">
                  Villagers can bring ornaments to place on the village tree beginning the day after Thanksgiving, November 25th. Please avoid placing
                  ornaments on lighting wires. All ornaments should be removed by Saturday, January 8th.
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
            Saturday, December 3rd Schedule of Events
          </div>
          <div class="flex flex-col mb-6 mt-2 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">10:00am</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am - 12:00pm</div>
                  <div class="text-gray-500">
                    Historical Society: Bring the children to paint a wooden ornament for your tree and enjoy roasted marshmallows and s'mores. Come
                    early as this is a popular event. Seating is limited.
                  </div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 4:00pm</div>
                  <div class="text-gray-500">
                    Artisan Craft Show at Freedom Hall:14 artists, pottery, jewelry, wreaths, shell art, soaps, honey and more.
                  </div>
                </div>
              </li>
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 4:00pm</div>
                  <div class="text-gray-500">
                    Historical Society – Visit the Gift Shop where you will find new and unique items for the holidays as well as our great selection
                    of "Cotuit-wear."
                  </div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:00am – 4:00pm</div>
                  <div class="text-gray-500">Free Admission Cahoon Museum of American Art Winter Open House, family friendly activities.</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">10:30am</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">10:30am - 1:30pm</div>
                  <div class="text-gray-500">Cotuit Library Cookie decorating for all ages</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div class="text-green-600 text-4xl font-christmas">11:00am</div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">11:00am - 2:00pm</div>
                  <div class="text-gray-500">The Cotuit Kettleers Store will be open! Great chance for holiday gifts for family & friends.</div>
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
                  <div class="text-gray-500">
                    Cotuit Fire Station Open House. Chili is back! And the Fire Department will again be collecting new, unwrapped toy donations for
                    Toys for Tot during Christmas in Cotuit until December 14th.
                  </div>
                </div>
              </li>

              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">12:00pm -4:00pm</div>
                  <div class="text-gray-500">Historical Society Guided Homestead Tours (weather permitting).</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">1:00pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">1:00pm - 3:00pm</div>
                  <div class="text-gray-500">Cahoon Museum Artists' Reception for Andrea Moore and Pauline Lim.</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">1:30pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">1:30pm</div>
                  <div class="text-gray-500">
                    At the Cotuit Library Merry Quizmas! Family Holiday Trivia - Form a team to compete with others! Sign up in advance. 508-428-8141
                    for information.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-green-600 text-4xl font-christmas">2:30pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">2:30pm - 3:30pm</div>
                  <div class="text-gray-500">
                    At the Cotuit Library Reindeer Games - Minute to Win It, Holiday edition. 60 second challenges with holiday flair! Hot cocoa on
                    patio throughout event
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-red-600 text-4xl font-christmas">Sunday 3:00pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">3:00pm - 5:00pm</div>
                  <div class="text-gray-500">
                    Hot Chocolate at the Village Green by Cotuit Fresh Market on the Village Green.
                    <span class="text-red-500">Please note that this is now moving to Sunday</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-red-600 text-4xl font-christmas">Sunday 3:30pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">3:30pm</div>
                  <div class="text-gray-500">
                    At the Town Dock - DJ Lisa Z and Pizza by Zoe Pizza of Mashpee.
                    <span class="text-red-500">Please note that this is now moving to Sunday</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-6 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-red-600 text-4xl font-christmas">Sunday 3:45pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">3:45pm</div>
                  <div class="text-gray-500">
                    Santa's Arrival by Boat at the Town Dock followed by Tree Lighting and Caroling on the Cotuit Village Green: Invocation by Pastor
                    Angela. <span class="text-red-500">Please note that this is now moving to Sunday</span>
                  </div>

                  <div>
                    <img src="./assets/santa-town-dock.jpg" alt="" class="my-6 border-[20px] border-white rounded-lg shadow-sm" />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="flex flex-col mb-44 mt-10 bg-indigo-50 rounded-lg shadow-md p-6">
            <div>
              <div class="text-red-600 text-4xl font-christmas">Sunday 4:00pm</div>
            </div>

            <ul class="divide-y divide-gray-200">
              <li class="py-3">
                <div class="flex flex-col">
                  <div class="time-headings">4:00pm</div>
                  <div class="text-gray-500">
                    Cotuit Federated Church will serve cookies by the tree this year at the Village Christmas Tree at 4pm. Cookies from the community
                    can be dropped off at the Church on Friday, December 2nd or Saturday December 3rd from 10:00am – 12:00pm.
                    <span class="text-red-500">Please note that this is now moving to Sunday</span>
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

          <div class="mt-10">
            <p class="text-gray-500 text-right">
              Illustrations by <span class="text-green-600">Carina Haythorn</span>,
              <a href="https://www.capetechdvc.com/" target="_blank" class="text-red-500">Cape Tech DVC</a>
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
