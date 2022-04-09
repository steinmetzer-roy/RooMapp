//the following is from this tutorial: https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
//this const is needed to load the JSON data from a file and render it inside a React component.
//courseData is a JSON array containing dummy course data. Each JSON object inside this array contains four things:
//Using export const allows you to define and initialize variables that can be imported into any React component
//This data could come from APIs or be read from external files
export const courseData = [
    {
        name: "Software Testing",
        room: "2300",
        time: "14.00",
        weekday: "Wednesdays",
    },
    {
        name: "Networks 2",
        room: "1600",
        time: "14.00",
        weekday: "Thursdays",
    },
];