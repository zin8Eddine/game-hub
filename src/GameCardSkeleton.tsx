import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
export default function GameCardSkeleton() {
  return (
    <Card>
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
