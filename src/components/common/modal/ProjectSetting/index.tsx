import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import type {
  ProjectDetail,
  ProjectUpdate,
} from "../../../../api/generated/data-contracts";
import { useGetProjectDetail } from "../../../../api/hooks/useGetProjectDetail";
import { useUpdateProject } from "../../../../api/hooks/useUpdateProject";
import { ProjectOptionSettingFields } from "../ProjectSetting/ProjectSettingForm/projectOptionSettingFields";
import { AnimatedPageTransition } from "./animatedPageTransition";
import { ProjectDetailSettingFields } from "./ProjectSettingForm/projectDetailSettingFields";
import { renderFooterButtons } from "./renderFooterButtons";

export const ProjectSettingModal = ({ onClose }: { onClose: () => void }) => {
  //TODO: 프로젝트에 옵션을 저장하는 방법 알아본 뒤 로직 변경 필요할듯
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : null;

  const methods = useForm<ProjectDetail>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      startDate: "",
      endDate: "",
      optionIds: [2, 4],
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const { data, error, isLoading } = useGetProjectDetail(projectId);
  const [selectedFeature, setSelectedFeature] = useState("기본");
  const { mutate } = useUpdateProject(projectId);
  const toast = useToast();

  useEffect(() => {
    if (data) {
      methods.reset({
        name: data.name || "",
        startDate: data.startDate ? data.startDate.slice(0, 16) : "",
        endDate: data.endDate ? data.endDate.slice(0, 16) : "",
        optionIds: data.optionIds || [],
      });

      if (
        JSON.stringify(data.optionIds) === JSON.stringify([2, 4]) ||
        JSON.stringify(data.optionIds) === JSON.stringify([4, 2])
      ) {
        setSelectedFeature("기본");
      } else {
        setSelectedFeature("사용자 설정");
      }
    }
  }, [data, methods]);

  const onSubmit = handleSubmit((updatedData) => {
    if (!isValid) {
      return;
    }

    const newName = updatedData.name?.trim();
    const newStartDate = updatedData.startDate
      ? new Date(updatedData.startDate).toISOString()
      : undefined;
    const newEndDate = updatedData.endDate
      ? new Date(updatedData.endDate).toISOString()
      : undefined;
    const newOptionIds =
      selectedFeature === "기본" ? [2, 4] : updatedData.optionIds || [];
    const updatedProjectData: ProjectUpdate = {
      name: newName || "",
      startDate: newStartDate,
      endDate: newEndDate,
      optionIds: newOptionIds,
    };
    console.log(updatedProjectData.optionIds);
    mutate(updatedProjectData, {
      onSuccess: () => {
        toast({
          title: "프로젝트 업데이트 성공",
          description: "프로젝트가 성공적으로 업데이트되었습니다.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      },
      onError: (err) => {
        toast({
          title: "프로젝트 업데이트 오류",
          description: "업데이트 중 오류가 발생했습니다.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      },
    });
  });

  const preventEnterKeySubmission = (
    e: React.KeyboardEvent<HTMLFormElement>
  ) => {
    const target = e.target as HTMLFormElement;
    if (e.key === "Enter" && !["TEXTAREA"].includes(target.tagName)) {
      e.preventDefault();
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [back, setBack] = useState(false);

  const handleNextPage = async () => {
    const isFormValid = await methods.trigger();
    if (isFormValid) {
      setCurrentPage(2);
      setBack(false);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(1);
    setBack(true);
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ModalOverlay />
      <StyledModalContent>
        <ModalHeader fontSize={26} fontWeight={800} pb={10}>
          프로젝트 설정
        </ModalHeader>
        <ModalCloseButton m={5} />
        <FormProvider {...methods}>
          <form
            action=""
            onSubmit={onSubmit}
            onKeyDown={preventEnterKeySubmission}
          >
            <AnimatedPageTransition currentPage={currentPage} back={back}>
              <ModalBody>
                {currentPage === 1 ? (
                  <ProjectDetailSettingFields
                    selectedFeature={selectedFeature}
                    setSelectedFeature={setSelectedFeature}
                  />
                ) : (
                  <>
                    <ProjectOptionSettingFields />
                    <Spacer height="24px" />
                  </>
                )}
              </ModalBody>
            </AnimatedPageTransition>

            <ModalFooter>
              {renderFooterButtons(
                currentPage,
                selectedFeature,
                handleNextPage,
                handlePreviousPage,
                onSubmit,
                isValid
              )}
            </ModalFooter>
          </form>
        </FormProvider>
      </StyledModalContent>
    </>
  );
};

const StyledModalContent = styled(ModalContent)`
  border-radius: 16.23px;
  padding: 0.5em;
  overflow: hidden;
`;
