import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

export default function GameCardSkeleton() {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"} width="350px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
        <HStack justifyContent="space-between">
          <SkeletonText />
          <SkeletonText />
        </HStack>
      </CardBody>
    </Card>
  );
}
