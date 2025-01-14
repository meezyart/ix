import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import AssistantContent from "chat/AssistantContent";
import FeedbackContent from "chat/FeedbackContent";
import FeedbackRequestContent from "chat/FeedbackRequestContent";
import SystemContent from "chat/SystemContent";
import ChatMessageAvatar from "chat/ChatMessageAvatar";
import AutonomousModeContent from "chat/AutonomousModeContent";
import AuthorizeContent from "chat/AuthorizeContent";
import AuthRequestContent from "chat/AuthRequestContent";
import ExecuteContent from "chat/ExecuteContent";
import { useColorMode } from "@chakra-ui/color-mode";
import ExecuteErrorContent from "chat/ExecuteErrorContent";
import ThoughtContent from "chat/ThoughtContent";
import ThinkContent from "chat/ThinkContent";

const ChatMessage = ({ message }) => {
  const { colorMode } = useColorMode();
  const { content } = message;
  let contentComponent = null;
  switch (content.type) {
    case "COMMAND":
      contentComponent = <AssistantContent content={content} />;
      break;
    case "AUTONOMOUS":
      contentComponent = <AutonomousModeContent content={content} />;
      break;
    case "AUTHORIZE":
      contentComponent = <AuthorizeContent content={content} />;
      break;
    case "AUTH_REQUEST":
      contentComponent = <AuthRequestContent content={content} />;
      break;
    case "EXECUTED":
      contentComponent = <ExecuteContent content={content} />;
      break;
    case "EXECUTE_ERROR":
      contentComponent = <ExecuteErrorContent content={content} />;
      break;
    case "FEEDBACK":
      contentComponent = <FeedbackContent content={content} />;
      break;
    case "FEEDBACK_REQUEST":
      contentComponent = <FeedbackRequestContent content={content} />;
      break;
    case "THINK":
      contentComponent = <ThinkContent content={content} />;
      break;
    case "THOUGHT":
      contentComponent = <ThoughtContent content={content} />;
      break;
    case "SYSTEM":
      contentComponent = <SystemContent content={content} />;
      break;
    default:
      contentComponent = <div>{content.message}</div>;
      break;
  }

  return (
    <Flex alignItems="flex-start" mb={4}>
      <Box mt={5} mr={3}>
        <ChatMessageAvatar message={message} />
      </Box>
      <Box
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
        width="800px"
        borderRadius={8}
        p={3}
      >
        {contentComponent}
      </Box>
    </Flex>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    role: PropTypes.string.isRequired,
    content: PropTypes.any.isRequired,
  }).isRequired,
};

export default ChatMessage;
