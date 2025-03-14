import React from "react";
import {
  Button,
  Card,
  Container,
  Media,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    caption,
    category_name,
    num_of_comments,
    num_of_pins,
    owner,
    pinned_id,
    post_image,
    profile_id,
    profile_image,
    title,
    updated_at,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();

  const handlePin = async () => {
    try {
      const { data } = await axiosRes.post("/pins/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, num_of_pins: post.num_of_pins + 1, pinned_id: data.id }
            : post;
        }),
      }));
    } catch (error) {
      // console.log(error);
    }
  };

  const handleUnpin = async () => {
    try {
      await axiosRes.delete(`/pins/${pinned_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, num_of_pins: post.num_of_pins - 1, pinned_id: null }
            : post;
        }),
      }));
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={styles.Owner} to={`/profiles/${profile_id}`}>
            <ProfileAvatar src={profile_image} size={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className={`${styles.TimeStamp} text-muted`}>
              {updated_at}
            </span>
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={post_image} alt={title} />
      </Link>
      {title && (
        <Card.Title className={`${styles.Title} mt-4`}>{title}</Card.Title>
      )}
      <Container>
        {caption && <Card.Text className={styles.Caption}>{caption}</Card.Text>}
      </Container>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <span className={styles.PinSpan}>
            <i className="fa-solid fa-thumbtack"></i>
            {num_of_pins}
            <Link className={styles.CommentLink} to={`/posts/${id}`}>
              <i className="fa-solid fa-comments"></i>
              {num_of_comments}
            </Link>
          </span>
          <span>
            <i className="fa-solid fa-tag"></i>
            {category_name}
          </span>
        </div>
        <div className="text-center justify-content">
          {pinned_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Press to unpin</Tooltip>}
            >
              <Button className={btnStyles.Unpin} onClick={handleUnpin}>
                <i className="fa-solid fa-location-pin"></i>
              </Button>
            </OverlayTrigger>
          ) : currentUser ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Pin this post!</Tooltip>}
            >
              <Button className={btnStyles.Pin} onClick={handlePin}>
                <i className="fa-solid fa-location-pin"></i>
              </Button>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to pin posts</Tooltip>}
            >
              <Button className={btnStyles.Pin}>
                <i className="fa-solid fa-location-pin"></i>
              </Button>
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
