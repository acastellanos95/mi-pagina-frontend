import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";

export default function Project(props) {
  return (
    <Card className="h-100">
      <CardImg
        top
        width="100%"
        src={`https://admin.andrecastellanos.dev${props.data.project_image.url}`}
        alt={props.data.Title}
      />
      <CardBody>
        <CardTitle>{props.data.Title}</CardTitle>
        <CardText>{props.data.description}</CardText>
        {props.data.url && (
          <a href={props.data.url} target="_blank" rel="noopener noreferrer">
            See project
          </a>
        )}
      </CardBody>
    </Card>
  );
}
