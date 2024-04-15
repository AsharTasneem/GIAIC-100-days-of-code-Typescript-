#! /usr/bin/env node.
// Discuss the difference between default and named exports in JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.

// Importing named exports:
import { utilOne, utilTwo } from "./Q3 utils.js";

// Importing a default export:
import Calculator from "./Q3 exporter.js";

// This code illustrates the syntax and usage differences between default and named exports.