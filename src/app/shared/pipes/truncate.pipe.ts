import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string | null | undefined, maxWords: number | string = 10): string {
      const actualWords = typeof maxWords === 'string' ? parseInt(maxWords, 10) : maxWords;
        if (!value) return '';

        const words = value.split(/\s+/); // Split by any whitespace (spaces, tabs, newlines)

        if (words.length <= actualWords) {
            return value; // Return original if fewer words than max
        }

        const truncatedWords = words.slice(0, actualWords); // Take the required number of words.
        return truncatedWords.join(' ') + '...'; // Join words and add ellipsis
    }
}