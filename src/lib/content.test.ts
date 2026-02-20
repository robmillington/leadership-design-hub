import { describe, it, expect } from "vitest";
import { formatDate, calculateReadingTime } from "@/lib/content";

describe("content utilities", () => {
    describe("formatDate", () => {
        it("should format valid dates correctly", () => {
            expect(formatDate("2024-01-15")).toBe("15 January 2024");
            expect(formatDate("2023-12-25")).toBe("25 December 2023");
        });

        it("should handle empty string", () => {
            expect(formatDate("")).toBe("");
        });

        it("should handle invalid dates gracefully", () => {
            const invalidDate = "not-a-date";
            expect(formatDate(invalidDate)).toBe(invalidDate);
        });

        it("should handle malformed dates", () => {
            const malformed = "2024-13-45"; // Invalid month and day
            expect(formatDate(malformed)).toBe(malformed);
        });
    });

    describe("calculateReadingTime", () => {
        it("should calculate reading time for short content", () => {
            const shortText = "This is a short piece of text.";
            expect(calculateReadingTime(shortText)).toBe(1); // Minimum 1 minute
        });

        it("should calculate reading time for longer content", () => {
            const words = new Array(400).fill("word").join(" ");
            expect(calculateReadingTime(words)).toBe(2); // 400 words / 200 wpm = 2 min
        });

        it("should handle empty content", () => {
            expect(calculateReadingTime("")).toBe(1); // Minimum 1 minute
        });

        it("should handle content with multiple spaces", () => {
            const text = "Word    word     word"; // Multiple spaces
            expect(calculateReadingTime(text)).toBe(1);
        });

        it("should round up reading time", () => {
            const words = new Array(250).fill("word").join(" ");
            expect(calculateReadingTime(words)).toBe(2); // 250 / 200 = 1.25, rounds to 2
        });
    });
});
