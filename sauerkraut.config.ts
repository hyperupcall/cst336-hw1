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
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="referrer" content="same-origin" />
				<link rel="stylesheet" href="/static/style.css"></link>
				<title>${layoutData.title}</title>
				${await config.createHead(config, layoutData)}
			</head>
			<body>
				${await config.createContent(config, layoutData)}
			</body>
		</html>`
}
