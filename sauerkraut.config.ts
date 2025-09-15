import type { Config, LayoutData, Frontmatter, Head } from 'sauerkraut'
import fs from 'node:fs'

const html = String.raw

export const title = 'CST336 Homework 1'

export function createContent(config: Config, layoutData: LayoutData) {
	const header = fs.readFileSync('./header.html', 'utf-8')
	return html`<body>
		${header}
		<!-- body -->
		${layoutData.body}
	</body>`
}

export async function createHtml(config: Config, head: Head, layoutData: LayoutData) {
	return html`<!doctype html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta name="referrer" content="same-origin">
				<link rel="stylesheet" href="./static/css/style.css"></link>
				<link rel="stylesheet" href="./static/css/ranade.css"></link>
				<link rel="stylesheet" href="./static/css/satoshi.css"></link>
				<title>${layoutData.title}</title>
				${await config.createHead(config, layoutData)}
			</head>
			<body>
				<main>
					${await config.createContent(config, layoutData)}
				</main>
				<footer>
					<hr>
					<p>
						This is my homework 1 web page for
						<a href="https://catalog.csumb.edu/preview_course_nopop.php?catoid=1&coid=437"
							>CST 336</a
						>
						at
						<a href="https://csumb.edu/">California State University, Monterey Bay</a>. The design and content of this page was designed with the grading rubric in mind. View <a href="https://github.com/hyperupcall/cst336-hw1">source code</a>.
					</p>
				</footer>
			</body>
		</html>`
}
