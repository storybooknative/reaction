import { ItemReview_artwork$ref } from "__generated__/ItemReview_artwork.graphql"
import React from "react"
import { storiesOf } from "storybook/storiesOf"
import { Flex } from "Styleguide/Elements/Flex"
import { Section } from "Styleguide/Utils/Section"
import { ItemReview } from "../ItemReview"

storiesOf("Styleguide/Components", module).add("ItemReview", () => {
  return (
    <>
      <Section title="Item Review">
        <Flex width={542} flexDirection="column">
          <ItemReview
            artwork={{
              " $refType": Symbol() as ItemReview_artwork$ref,
              artist_names: "Francesca DiMattio",
              title: "The Fox and the Hound",
              date: "2018",
              medium: "Oil on canvas",
              dimensions: {
                in: "96 × 79 in",
                cm: "243.8 × 200.7 cm",
              },
              attribution_class: {
                short_description: "This is a unique work",
              },
              image: {
                resized: {
                  url:
                    "https://d32dm0rphc51dk.cloudfront.net/XIlup0jb5BESj71JI7ZHpQ/larger.jpg",
                },
              },
            }}
          />
        </Flex>
      </Section>
      <Section title="Item Review with tall image">
        <Flex width={542} flexDirection="column">
          <ItemReview
            artwork={{
              " $refType": Symbol() as ItemReview_artwork$ref,
              artist_names: "Francesca DiMattio",
              title: "The Fox and the Hound",
              date: "2018",
              medium: "Oil on canvas",
              dimensions: {
                in: "96 × 79 in",
                cm: "243.8 × 200.7 cm",
              },
              attribution_class: {
                short_description: "This is a unique work",
              },
              image: {
                resized: {
                  url: "http://via.placeholder.com/350x980",
                },
              },
            }}
          />
        </Flex>
      </Section>
      <Section title="Item Review with fat image">
        <Flex width={542} flexDirection="column">
          <ItemReview
            artwork={{
              " $refType": Symbol() as ItemReview_artwork$ref,
              artist_names: "Francesca DiMattio",
              title: "The Fox and the Hound",
              date: "2018",
              medium: "Oil on canvas",
              dimensions: {
                in: "96 × 79 in",
                cm: "243.8 × 200.7 cm",
              },
              attribution_class: {
                short_description: "This is a unique work",
              },
              image: {
                resized: {
                  url: "http://via.placeholder.com/980x350",
                },
              },
            }}
          />
        </Flex>
      </Section>
    </>
  )
})
