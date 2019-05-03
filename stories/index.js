import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Text } from "../src/UI";

storiesOf("Button", module)
	.add("with text", () => (
		<Button>
			<Text onClick={action("clicked")}>Hello Button</Text>
		</Button>
	))
	.add("with emoji", () => (
		<Button>
			<Text role="img" aria-label="so cool" onClick={action("clicked")}>
				😀 😎 👍 💯
			</Text>
		</Button>
	));

storiesOf("Text", module)
	.add("with text", () => (
		<div style={{ paddingTop: 50 }}>
			<Text>Hello Button</Text>
		</div>
	))
	.add("with emoji", () => (
		<div style={{ paddingTop: 50 }}>
			<Text>😀 😎 👍 💯</Text>
		</div>
	))
	.add("text bold", () => (
		<div style={{ paddingTop: 50 }}>
			<Text bold>aaaaaaaaaaaa</Text>
		</div>
	))
	.add("text link", () => (
		<div style={{ paddingTop: 50 }}>
			<Text link>aaaaaaaaaaaa</Text>
		</div>
	))
	.add("text green", () => (
		<div style={{ paddingTop: 50 }}>
			<Text bold color="green">
				aaaaaaaaaaaa
			</Text>
		</div>
	))
	.add("text pink", () => (
		<div style={{ paddingTop: 50 }}>
			<Text link bold color="pink">
				aaaaaaaaaaaa
			</Text>
		</div>
	));
