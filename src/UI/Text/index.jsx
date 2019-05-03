import styled from "styled-components/primitives";

const Text = styled.Text`
	
	padding: 20px;
	border-radius: 20px;
	color: #fff;
	${props => props.bold && "font-weight: bold;"}
	${props => props.link && "text-decoration: underline;"}
	background-color: ${props => (props.color ? props.color : "red")};
`;

export { Text as default, Text };
