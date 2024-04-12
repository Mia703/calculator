import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from './astro_BhVei4sG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Simple Calculator",
    description = "A simple calculator",
    favicon = "/calculator-favicon.svg"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(favicon, "href")}><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="author" content="Amya Moore"><title>${title}</title>${renderHead()}</head> <body> <div id="main-grid"> ${renderSlot($$result, $$slots["default"])} </div>   </body> </html>`;
}, "C:/Users/bookw/OneDrive/Desktop/New Coding Folder/calculator/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "A Simple Calculator", "description": "A simple calculator", "favicon": "/calculator-favicon.svg", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <div class="theme-container" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>A Simple Calculator</h1> <div class="history-container" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>History</h2> <div class="history-content" data-astro-cid-j7pv25f6> <p id="history" data-astro-cid-j7pv25f6>hello</p> </div> </div> </div> <div class="calculator" data-astro-cid-j7pv25f6> <div class="calculator-output" data-astro-cid-j7pv25f6> <h1 id="display" data-astro-cid-j7pv25f6>0</h1> </div> <div class="calculator-buttons-container" data-astro-cid-j7pv25f6> <!-- simple calculator buttons --> <div class="basic-buttons" data-astro-cid-j7pv25f6> <button type="button" id="seven" data-astro-cid-j7pv25f6>7</button> <button type="button" id="eight" data-astro-cid-j7pv25f6>8</button> <button type="button" id="nine" data-astro-cid-j7pv25f6>9</button> <button type="button" id="backspace" class="orange bold" data-astro-cid-j7pv25f6> <span class="material-symbols-sharp" data-astro-cid-j7pv25f6>backspace</span> </button> <button type="button" id="four" data-astro-cid-j7pv25f6>4</button> <button type="button" id="five" data-astro-cid-j7pv25f6>5</button> <button type="button" id="six" data-astro-cid-j7pv25f6>6</button> <button type="button" id="plus" data-astro-cid-j7pv25f6>+</button> <button type="button" id="one" data-astro-cid-j7pv25f6>1</button> <button type="button" id="two" data-astro-cid-j7pv25f6>2</button> <button type="button" id="three" data-astro-cid-j7pv25f6>3</button> <button type="button" id="minus" data-astro-cid-j7pv25f6>-</button> <button type="button" id="dot" data-astro-cid-j7pv25f6>.</button> <button type="button" id="zero" data-astro-cid-j7pv25f6>0</button> <button type="button" id="divide" data-astro-cid-j7pv25f6>/</button> <button type="button" id="multiply" data-astro-cid-j7pv25f6>x</button> <button type="button" id="clear" class="orange bold" data-astro-cid-j7pv25f6>C</button> <button type="button" id="enter" class="orange bold" data-astro-cid-j7pv25f6>enter</button> </div> </div> </div> </div> ` })} `;
}, "C:/Users/bookw/OneDrive/Desktop/New Coding Folder/calculator/src/pages/index.astro", void 0);

const $$file = "C:/Users/bookw/OneDrive/Desktop/New Coding Folder/calculator/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
