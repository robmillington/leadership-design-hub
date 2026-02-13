import { Buffer } from "buffer";

// Make Buffer available globally for gray-matter and other Node.js libraries
globalThis.Buffer = Buffer;
window.Buffer = Buffer as any;
