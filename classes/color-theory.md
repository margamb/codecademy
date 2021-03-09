##### The color wheel

- This is a tool to visualize the relationship between colors.
- 3 color groups
  - Primary -> Red, blue and yellow. They are also the basis for all other colors on the wheel.
  - Secondary -> Green, orange and purple. They are created by mixing two primary colors.
  - Terciary -> They are formed when mixing a secondary and primary. These usually result in a two-word name, such as:
    - Red-orange (Vermillion)
    - Yellow-orange (Amber)
    - Yellow-green (Chartreuse)
    - Blue-green (Teal)
    - Blue-purple (Violet)
    - Red-purple (Magenta)

##### The color Wheel and HSLA

```css
h1 {
  color: Yellow; /*Keyword */
}
h2 {
  color: #8fbc8f; /* Hex Code */
}
h3 {
  color: rgb(23, 45, 23); /* RGB*/
}
p {
  color: hsla(34, 100%, 50%, 0.1); /* HSLA*/
}
```

- HSLA is the most semantic system of setting colors with CSS.
- Using values that have semantic meaning gives the designer more direct control over the color scheme, and more direct ability to manage contrast and create related color schemes.

- Hue -> This is expressed as the angle in degrees around the color wheel ('pure' color)
- Saturation -> Refers to the intensity or purity of that hue.
  - 100% Full saturation are the color itself.
  - 0% color with no saturation are completely grayscale.
- Lightness -> Refers to the lightness of the color.
  - 0% -> Black
  - 100% -> White
- A || Alpha -> Refers to opacity.
  - 0% -> is fully transparent
  - 100% -> is fully opaque.

##### Warm colors

- All colors have a warmth value assigned to them which (warm || cool).
- Warm colors range between red and yellow. Orange, brown, tan(bronceado).
- These color are "warm" colors because they evoke a sense of warmth.
- Red and yellow (warm colors) are associated with fire.
- Warm colors can also promote a feeling of aggression and are considered bold.

##### Cool colors

- These colors range between blue, purple and green. Most gray colors fall into the cool category as well.
- Cool colors are given this designation because of their calming, soothing nature. They’re often associated with winter climates or water.

##### Tints and Shades

- You can also increase and decrease the lightness of a color, resulting in tints and shades of a hue, respectively.
- Tints -> occur when white is applied to a color, adding or increasing the lightness of a hue.
- Shades -> are created when black is added to a color, which decreases the lightness of a hue.
- In HSLA -> tints and shades are determined by the third number -> L for lightness.
  - Start at 0% -> Black
  - 100% -> White.

##### Color contrast

- Color contrast plays a major role in design as well.
- Colors opposite of each other on the color wheel tend to have a higher contrast.
- Colors that fall next to each other have a lower contrast to one another.
- When applying color to your designs, it’s vital to ensure contrast levels provide clarity to the users for the elements on your page.
- It’s essential to try and increase the contrast of your designs in order to promote ease of use and legibility.
- This is also the reason why you often see dark gray or black text on a white background. The high contrast between the two colors provides the best ability for users to read the information without any difficulty.
- Before we begin to add color to our website, let’s add contrast to the text elements to ensure the readability of our content is ideal.

##### Color schemes

- Color schemes (or color palettes) are the result of pairing two or more colors together.
- When deciding which colors to use in your design, there are four different color schemes to consider:

  - Monochromatic Design

    - It utilizes a single color with varying shades and tints to create a monochromatic palette.
    - Each color in the scheme is derived from the base color. While all elements within the design may feel similar, you can help eliminate the monotonous feeling with high contrast. This means when you are selecting a monochromatic color scheme, it’s important to select a much lighter and much darker shade of the main color.
    - These monochromatic color schemes are beneficial in that they provide an organized impression when applied to your designs. The use of a single color can provide an immediate sense of harmony.
    - Monochromatic schemes can also consist of black and white, with varying shades of gray

  - Complementary Designs

    - a complementary color scheme utilizes colors opposite from each other on the color wheel. ( Blue(main color) vs Orange)
    - Complementary color schemes are popular on the web as they have high contrast in the color pairing.
    - They can seem clashing if complementary colors are used for large areas that are directly next to each other. However, when used strategically, they can draw attention to certain elements on the page that you want users to focus on.

  - Analogous Color Schemes

    - Analogous color schemes apply three or more colors that are adjacent to each other on the color wheel. Typically, there is one dominant color (or hue), combined with a second to support, and a third to accent the color palette.
    - Analogous color schemes create a visually pleasing and calming display.
      - The color blue can pair nicely with both teal and green.
      - However, analogous color schemes provide a low-contrast experience, since all colors fall in line with one another.
      - They shouldn’t be used for content that needs the user’s direct attention, but they can be used to create backgrounds that do not compete with the main content of the site.

  - Triadic Color Schemes

    - These consist of three colors that are equidistant from each other on the color wheel.
    - Triadic color schemes, much like complementary schemes, provide additional pops of color while allowing for some flexibility in the range you can use.
    - For instance, if we stick with blue being our main color, we would then select red-orange and yellow-green as the pairing combinations. This creates a triangle of colors within the color wheel and gives us a wider palette to choose from. BLUE(main color) - RED/ORANGE - YELLOW/GREEN
    - Triadic color schemes are useful in that they create a sense of equality, vibrancy, and security in your designs.

##### Color Psychology

- Red: Passionate, energetic, angry
- Orange: Optimistic, playful, fun
- Yellow: Welcoming, intellectual, impatient
- Green: Prosperous, balanced, growing
- Blue: Peaceful, loyal, cold
- Purple: Imaginative, royal, spiritual
- Gray: Unemotional, compromising
- White: Innocent, pure
- Black: Luxurious, powerful

- Color associations may vary from other parts of the world as well. However, when selecting colors, be sure to choose ones that help reinforce the overall message and tone of the website.

##### Best Practices

- Use neon colors sparingly. While the use of neon colors can feel hip, they are often hard on a user’s eyes.
- Avoid vibrating colors. Vibrating colors result from pairing two colors with high saturation together that may be complementary to one another. It creates a glowing or moving effect, which also can be hard on one’s eyes (For example, the red and green pairing that is common with Christmas cards is very glaring when presented on a screen - intense and distracting this pairing)
- Use backdrops to separate vibrating colors.
- Avoid color combinations with insufficient contrast, including:
  - Bright colors on top of bright colors
  - Light colors on top of light colors
  - Dark colors on top of dark colors
- Even if there’s enough contrast in these pairings for the different colors to be legible, they likely won’t create enough contrast to attract the user’s attention.
- Remember that most users skim websites! They are not reading every word and checking every menu—you need to guide the user to the most important content with good color choices.

##### Color Theory Review

- The keys to choosing the right colors for your projects are:
  - Using the color wheel as a basis for selecting colors
  - Using a color scheme approach that promotes harmony
  - Using colors that fit the context and emotion you are trying to display to users
  - Using contrast to enhance the legibility of elements on the page
  - Using shades and tints of a color to create flexibility
  - Avoiding combinations that can cause issues for users
