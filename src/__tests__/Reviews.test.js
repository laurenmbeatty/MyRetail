import React from "react";
import { create } from "react-test-renderer";
import { render, cleanup } from "react-testing-library";
import "jest-styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
import Reviews from "../components/reviews/Reviews";

afterEach(cleanup);

test("snapshot", () => {
  const c = create(<Reviews />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("it parses date Correctly", () => {
  const c = create(<Reviews manipulateDate={() => {}} />);
  const instance = c.getInstance();
  const testDate = "Mon Mar 11 13:13:55 UTC 2013";

  expect(instance.manipulateDate(testDate)).toBe("Mar 11, 2013");
});

test("it renders with some props", () => {
  const props = {
    Con: [
      {
        RatableAttributes: [
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "4"
          },
          {
            description: "quality",
            name: "QUALITY",
            value: "1"
          },
          {
            description: "value",
            name: "VALUE",
            value: "1"
          }
        ],
        datePosted: "Mon Mar 11 13:13:55 UTC 2013",
        overallRating: "1",
        review:
          "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
        reviewKey: "b326b0d6-e6ae-4ec5-8080-720f0ad741af",
        screenName: "New York",
        title: "Very unhappy"
      }
    ],
    ConsolidatedRatableAttributes: [
      {
        description: "Quality",
        name: "QUALITY",
        value: "4"
      },
      {
        description: "Easy to Use",
        name: "EASY_TO_USE",
        value: "4.5"
      },
      {
        description: "Value",
        name: "VALUE",
        value: "3.5"
      }
    ],
    Pro: [
      {
        RatableAttributes: [
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        datePosted: "Thu Apr 18 19:42:19 UTC 2013",
        overallRating: "5",
        review:
          "This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!",
        reviewKey: "d602bcdf-53be-4769-94da-3b3fd2517d21",
        screenName: "Eric",
        title: "Fantastic Blender"
      }
    ],
    Reviews: [
      {
        RatableAttributes: [
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "4"
          },
          {
            description: "quality",
            name: "QUALITY",
            value: "1"
          },
          {
            description: "value",
            name: "VALUE",
            value: "1"
          }
        ],
        city: "NYC",
        customerId: "110657105",
        datePosted: "Mon Mar 11 13:13:55 UTC 2013",
        helpfulVotes: "39",
        overallRating: "1",
        review:
          "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
        reviewKey: "b326b0d6-e6ae-4ec5-8080-720f0ad741af",
        screenName: "New York",
        state: "NY",
        title: "Very unhappy",
        totalComments: "0",
        totalVotes: "52"
      },
      {
        Comments: [
          {
            city: "",
            commentKey: "CommentKey:ffcefb66-381a-4985-b869-9fcfdd26e7cc",
            commentText:
              "Separating the men from the boys,  separating the amateurs from the professionals when it comes to blenders, when you revealed to us that, -It doesn&#x27;t pulverize seeds-.I really need a good blender, but there is No way that I would buy this blender now. Thank you so much, Jon",
            postedDate: "Thu Oct 10 04:17:50 UTC 2013",
            screenName: "JON",
            userKey: "118863321",
            userTier: "Trusted"
          }
        ],
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "2"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "3"
          },
          {
            description: "value",
            name: "VALUE",
            value: "2"
          }
        ],
        city: "Idaho Falls",
        customerId: "116317693",
        datePosted: "Sun Sep 01 03:18:11 UTC 2013",
        helpfulVotes: "16",
        overallRating: "2",
        review:
          "This blender is not superior to other smoothie blenders, It doesn't pulverize seeds and leaves green smoothies chunky with a lot of pulp. The single serve concept is amazing, however, my single serve cup began to break right from the start. The prongs became chipped because of the difficulty of screwing it in and out of the base. It won't blend for more than a minute without smelling like burned rubber. While the single serve seemed to blend more smoothly, it didn't hold much, especially when adding ice. I was very disappointed and so I returned it,",
        reviewKey: "399853f3-4451-40a8-bcd6-bda2d814d9f4",
        screenName: "London",
        state: "ID",
        title: "Very Disappointed",
        totalComments: "1",
        totalVotes: "21"
      },
      {
        RatableAttributes: [
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        city: "Oakland",
        customerId: "100025104",
        datePosted: "Thu Apr 18 19:42:19 UTC 2013",
        helpfulVotes: "10",
        overallRating: "5",
        review:
          "This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!",
        reviewKey: "d602bcdf-53be-4769-94da-3b3fd2517d21",
        screenName: "Eric",
        state: "CA",
        title: "Fantastic Blender",
        totalComments: "0",
        totalVotes: "10"
      },
      {
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        city: "Cambridge",
        customerId: "172227",
        datePosted: "Sat Jan 18 01:20:36 UTC 2014",
        helpfulVotes: "9",
        overallRating: "5",
        review:
          "I am blown away by this blender. It obliterates ice and frozen fruit - and blends fresh fruits to smooth perfection. It even makes quick work of fresh ginger and tough greens. I did a ton of research before settling on the Ninja. This was a splurge for me - and I spent the extra money to get the single serve cups, thinking I'd take my smoothie to work every morning. But my husband is totally hooked on smoothies now too, so the big pitcher is getting regular use. Tried it out for margaritas tonight... half a lime, half a lemon, half an orange with tequila, honey and ice... unbelievably good. Haven't tried it for soup or sauce yet, but can hardly wait.\n\nI'm impressed by features such as the suction cup feet, the snap-seal lid, and the sensor that prevents the machine from being turned on without the top in place. It cleans up nicely too. \n\nBottom line: I can't stop raving about this thing and have recommended it to all my friends and family.",
        reviewKey: "d8e9ac59-6c3a-47be-8b87-f912715ccd18",
        screenName: "E",
        state: "MA",
        title: "Couldn't be happier",
        totalComments: "0",
        totalVotes: "9"
      },
      {
        Comments: [
          {
            city: "",
            commentKey: "CommentKey:a5b92fc8-ec2a-4772-b4ea-3cf4d473015b",
            commentText:
              "THANK YOU, THANK YOU&#x21;&#x21;&#x21;&#x21;&#x21; YOU JUST GAVE ME THE BEST REASON TO -- NOT BUY -- THIS THING &#x21; THANK YOU, JON",
            postedDate: "Thu Oct 10 03:44:47 UTC 2013",
            screenName: "JON",
            userKey: "118863321",
            userTier: "Trusted"
          }
        ],
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "1"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "1"
          },
          {
            description: "value",
            name: "VALUE",
            value: "1"
          }
        ],
        city: "new york",
        customerId: "116426870",
        datePosted: "Thu Jun 06 04:49:37 UTC 2013",
        helpfulVotes: "38",
        overallRating: "1",
        review:
          " Upon using this blender  it turns out that the food gets into a deep hole at the bottom of the blade assembly , which fits on top of the rotating spindle, which cannot be cleaned.  No amount of rinsing or dish washer washing can get to it. A special thin and long brush would be required. Such food deposits can quickly become a place for bacteria growth and accumulate soap from dishwasher etc. A radical design change and going back to the drawing board is required, which Ninja would be unwilling to do.  Very poor and harmful product",
        reviewKey: "49add669-1256-4894-9fce-9e0464342887",
        screenName: "gourmet",
        state: "NY",
        title: "bacteria hazard",
        totalComments: "1",
        totalVotes: "69"
      },
      {
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        city: "Wilmington ",
        customerId: "115016455",
        datePosted: "Sun Mar 16 13:54:36 UTC 2014",
        helpfulVotes: "5",
        overallRating: "5",
        review:
          "Right out of the box I love this thing. You have to read the instructions: it indicates you must pulse several times THEN blend in order to get the smooth consistency. I'm going now to google soups to make. I'll add on to my review once I've tried more stuff. I know some folks had problems, I can say with total confidence that Ninja backs up what they make. I have a vacuum, steamer and iron and I broke the vacuum and they still fixed it for free. Easy peasy. Be sure to register your purchase. Peace. ",
        reviewKey: "bf2283a9-37a1-46e2-b9b4-3edb757d5375",
        screenName: "Sandra",
        state: "DE",
        title: "Great Blender",
        totalComments: "0",
        totalVotes: "5"
      },
      {
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        city: "Tucson",
        customerId: "119946555",
        datePosted: "Thu Jan 30 18:50:22 UTC 2014",
        helpfulVotes: "6",
        overallRating: "5",
        review:
          "My daughter received this Ninja blender and she absolutely loves it. My grandson has Autisim and has very sensitive taste buds. With the Ninja my daughter is able to puree his homemade soups, &amp; refried beans. Life is a little easier for my daughter &amp; him. She is in heaven. \n",
        reviewKey: "7c7ef8c0-e227-45a5-86cd-c29adeb0bd2a",
        screenName: "Flora",
        state: "AZ",
        title: "Ninja Blender",
        totalComments: "0",
        totalVotes: "7"
      },
      {
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "4"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        city: "Minneapolis",
        customerId: "109690154",
        datePosted: "Sun Jan 12 17:41:43 UTC 2014",
        helpfulVotes: "4",
        overallRating: "5",
        review:
          "I have to assume that the negative reviewers received an unfortunate &quot;lemon&quot; blender... that, or they didn't read the instruction manual, because I love my Ninja and definitely recommend it.\n\nI've had this blender for over a year and it still works as wonderfully as the day I bought it. I use it primarily for making smoothies, everything from green monsters to peanut butter protein shakes to frozen fruit &amp; yogurt smoothies with chia seeds on top.\n\nIt's like having Jamba Juice in my kitchen, but without the long line of snap-chatting teenagers.\n\nI frequently use the to-go cups to blend and take with me in the car. If you are in the camp lamenting that it doesn't hold enough, you probably also expect that once blended, it will be as full as you originally (over)stuffed it.\n\nRespect the max fill line, people, or use the full-size blender if you are going for NYC Big Gulp size.\n\nI will say, that if you are looking to seriously juice, this is not the blender for you. \n\nIt might take a little experimentation to get the right ratio of liquid to solid/frozen for a perfectly smooth blend, but once you figure out what works for you, it's easy!",
        reviewKey: "9e0322d2-256e-46a5-80dc-b4468e58359b",
        screenName: "Kari",
        state: "MN",
        title: "Love this blender!",
        totalComments: "0",
        totalVotes: "4"
      },
      {
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "5"
          }
        ],
        city: "Houston",
        customerId: "116412794",
        datePosted: "Wed Jun 05 14:26:21 UTC 2013",
        helpfulVotes: "5",
        overallRating: "5",
        review:
          "[...]\nAll the parts are well made and good quality. The only thing that seems a little flimsy would be the drinking tops for the single serve cups, but those don't even matter because all you are doing is drinking from the tops.  All the rest of the machine is top notch.\n\nThis blender is powerful, quiet and very easy to clean.   \n\n[...]\nYou will not regret buying this machine.  ",
        reviewKey: "4cc67e87-6754-4cab-8eb7-fb3bd738c16c",
        screenName: "Te-Ann",
        state: "TX",
        title: "LOVE LOVE LOVE!!!!",
        totalComments: "0",
        totalVotes: "6"
      },
      {
        RatableAttributes: [
          {
            description: "quality",
            name: "QUALITY",
            value: "5"
          },
          {
            description: "easy_to_use",
            name: "EASY_TO_USE",
            value: "5"
          },
          {
            description: "value",
            name: "VALUE",
            value: "4"
          }
        ],
        city: "CENTREVILLE",
        customerId: "102170259",
        datePosted: "Thu Jan 30 05:33:15 UTC 2014",
        helpfulVotes: "3",
        overallRating: "5",
        review:
          "I'm not sure why there are so many negative reviews about this blender on Target's website, but it's a great blender.  The first blender I've own that actually crushes the ice completely! Perfect for shakes!",
        reviewKey: "3e810dba-638f-4146-aee8-190a741d86d5",
        screenName: "SL",
        state: "VA",
        title: "Fantastic blender!!",
        totalComments: "0",
        totalVotes: "3"
      }
    ],
    consolidatedOverallRating: "4",
    totalPages: "2",
    totalReviews: "14"
  };
  const starsArray = [1, 2, 3, 4, 5];

  const { getByText } = render(
    <Reviews reviews={props} starsArray={starsArray} />
  );

  const review = getByText(/Less than 2 months after purchase/);
  const mostHelpful = getByText(/most helpful 4-5 star review/);

  expect(review).toBeDefined();
  expect(mostHelpful).toBeDefined();
});
