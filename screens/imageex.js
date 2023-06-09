import React from "react";
import { View, Text } from "react-native";
import PostImage from "./PostImage";

const PostDetail = ({ postId }) => {
  return (
    <View>
      <Text>Post Detail</Text>
      <PostImage postId={postId} />
    </View>
  );
};

export default PostDetail;
