# mtg
Magic the Gathering

Query the API of the trading card game Magic the Gathering, store results locally, and give priority to reading stored result rather than query the API. Only query the API if there is no recently stored result locally.

## Open source code locally with Ubuntu subsystem on Windows
Just run `code .` while in the root directory, using Ubuntu subsystem on Windows.

To open this same directory in Explorer, run `explorer.exe .`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## ToDo

- Query all formats, sets, and types to populate their dropdowns.
- Store the results of these queries as local files.
- Use stored results if they are not older than 1 month.
- Display paginated results, including images.
- The formats is a local filter rather than a query parameter.
- Query parameters: set, pageSize, page, and colors.
- The colors query parameter can take one or several colors, and use AND or OR operators.
- Some of the query parameters are hard-coded, like the card colors, since these never change.
- Make the display print friendly, with the option to include or exclude images.

## Annex

### CPC Palette
Source: https://www.cpcwiki.eu/index.php/CPC_Palette

| Firmware Number	| Hardware Number	| Colour Name	| R %	| G %	| B %	| Hexadecimal	| RGB values | Colour |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 54h |	Black |	0 |	0 |	0 |	#000000 |	0/0/0 | <span style="background-color: #000000; width: 40px; height: 25px; display: block;"></span> |	
| 1 |	44h (or 50h) |	Blue |	0 |	0 |	50 |	#000080 |	0/0/128 |	<span style="background-color: #000080; width: 40px; height: 25px; display: block;"></span> |
| 2	| 55h	| Bright Blue	| 0	| 0	| 100	| #0000FF	| 0/0/255 | <span style="background-color: #0000FF; width: 40px; height: 25px; display: block;"></span> | 	
| 3	| 5Ch	| Red	| 50	| 0	| 0	| #800000	| 128/0/0	| <span style="background-color: #800000; width: 40px; height: 25px; display: block;"></span> |
| 4	|	58h	|	Magenta	|	50	|	0	|	50	|	#800080	|	128/0/128	| <span style="background-color: #800080; width: 40px; height: 25px; display: block;"></span> |
| 5	|	5Dh	|	Mauve	|	50	|	0	|	100	|	#8000FF	|	128/0/255	| <span style="background-color: #8000FF; width: 40px; height: 25px; display: block;"></span> |
| 6	|	4Ch	|	Bright Red	|	100 |	0 |	0 |	#FF0000 |	255/0/0	| <span style="background-color: #FF0000; width: 40px; height: 25px; display: block;"></span> |
| 7	|	45h	(or 48h)	|	Purple	|	100 |	0 |	50 |	#FF0080 |	255/0/128	| <span style="background-color: #FF0080; width: 40px; height: 25px; display: block;"></span> |
| 8	|	4Dh	|	Bright Magenta	|	100 |	0 |	100 |	#FF00FF |	255/0/255	| <span style="background-color: #FF00FF; width: 40px; height: 25px; display: block;"></span> |
| 9	|	56h	|	Green	|	0 |	50 |	0 |	#008000 |	0/128/0	| <span style="background-color: #008000; width: 40px; height: 25px; display: block;"></span> |
| 10	|	46h	|	Cyan	|	0 |	50 |	50 |	#008080 |	0/128/128	| <span style="background-color: #008080; width: 40px; height: 25px; display: block;"></span> |
| 11	|	57h	|	Sky Blue	|	0 |	50 |	100 |	#0080FF |	0/128/255	| <span style="background-color: #0080FF; width: 40px; height: 25px; display: block;"></span> |
| 12	|	5Eh	|	Yellow	|	50 |	50 |	0 |	#808000 |	128/128/0	| <span style="background-color: #808000; width: 40px; height: 25px; display: block;"></span> |
| 13	|	40h (or 41h)	|	White	|	50 |	50 |	50 |	#808080 |	128/128/128	| <span style="background-color: #808080; width: 40px; height: 25px; display: block;"></span> |
| 14	|	5Fh	|	Pastel Blue	|	50 |	50 |	100 |	#8080FF |	128/128/255	| <span style="background-color: #8080FF; width: 40px; height: 25px; display: block;"></span> |
| 15	|	4Eh	|	Orange	|	100 |	50 |	0 |	#FF8000 |	255/128/0	| <span style="background-color: #FF8000; width: 40px; height: 25px; display: block;"></span> |
| 16	|	47h	|	Pink	|	100 |	50 |	50 |	#FF8080 |	255/128/128	| <span style="background-color: #FF8080; width: 40px; height: 25px; display: block;"></span> |
| 17	|	4Fh	|	Pastel Magenta	|	100 |	50 |	100 |	#FF80FF |	255/128/255	| <span style="background-color: #FF80FF; width: 40px; height: 25px; display: block;"></span> |
| 18	|	52h	|	Bright Green	|	0 |	100 |	0 |	#00FF00 |	0/255/0	| <span style="background-color: #00FF00; width: 40px; height: 25px; display: block;"></span> |
| 19	|	42h (or 51h)	|	Sea Green	|	0 |	100 |	50 |	#00FF80 |	0/255/128	| <span style="background-color: #00FF80; width: 40px; height: 25px; display: block;"></span> |
| 20	|	53h	|	Bright Cyan	|	0 |	100 |	100 |	#00FFFF |	0/255/255	| <span style="background-color: #00FFFF; width: 40px; height: 25px; display: block;"></span> |
| 21	|	5Ah	|	Lime	|	50 |	100 |	0 |	#80FF00 |	128/255/0	| <span style="background-color: #80FF00; width: 40px; height: 25px; display: block;"></span> |
| 22	|	59h	|	Pastel Green	|	50 |	100 |	50 |	#80FF80 |	128/255/128	| <span style="background-color: #80FF80; width: 40px; height: 25px; display: block;"></span> |
| 23	|	5Bh	|	Pastel Cyan	|	50 |	100 |	100 |	#80FFFF |	128/255/255	| <span style="background-color: #80FFFF; width: 40px; height: 25px; display: block;"></span> |
| 24	|	4Ah	|	Bright Yellow	|	100 |	100 |	0 |	#FFFF00 |	255/255/0	| <span style="background-color: #FFFF00; width: 40px; height: 25px; display: block;"></span> |
| 25	|	43h (or 49h)	|	Pastel Yellow	|	100 |	100 |	50 |	#FFFF80 |	255/255/128	| <span style="background-color: #FFFF80; width: 40px; height: 25px; display: block;"></span> |
| 26	|	4Bh	|	Bright White	|	100 |	100 |	100 |	#FFFFFF |	255/255/255	| <span style="background-color: #FFFFFF; width: 40px; height: 25px; display: block;"></span> |
