import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import type { ProjectDetail } from "@/api/generated/data-contracts";

import { Project as ProjectApi } from "../../../../api/generated/Project";
import { ProjectOptionSettingFields } from "../ProjectSetting/ProjectSettingForm/projectOptionSettingFields";
import { AnimatedPageTransition } from "./animatedPageTransition";
import { ProjectDetailSettingFields } from "./ProjectSettingForm/projectDetailSettingFields";
import { renderFooterButtons } from "./renderFooterButtons";

export const ProjectSettingModal = ({ onClose }: { onClose: () => void }) => {
  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(
    null
  );
  const projectId = useParams().id;
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<ProjectDetail>();

  const [selectedFeature, setSelectedFeature] = useState("기본");
  const [currentPage, setCurrentPage] = useState(1);
  const [back, setBack] = useState(false);

  const handleNextPage = () => {
    setCurrentPage(2);
    setBack(false);
  };

  const handlePreviousPage = () => {
    setCurrentPage(1);
    setBack(true);
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      const projectApi = new ProjectApi();
      try {
        if (projectId) {
          const response = await projectApi.getProject(parseInt(projectId));
          const fetchedData = response.data.resultData;

          if (fetchedData) {
            setProjectDetail(fetchedData);
            methods.reset({
              name: fetchedData.name,
              startDate: fetchedData.startDate
                ? fetchedData.startDate.slice(0, 16)
                : undefined,
              endDate: fetchedData.endDate
                ? fetchedData.endDate.slice(0, 16)
                : undefined,
              optionIds: fetchedData.optionIds,
            });
          }
        }
      } catch (err) {
        setError("Failed to fetch project data");
      }
    };

    fetchProjectData();
  }, [projectId, methods]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!projectDetail) {
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

        <AnimatedPageTransition currentPage={currentPage} back={back}>
          {currentPage === 1 ? (
            <ModalBody>
              <FormProvider {...methods}>
                <ProjectDetailSettingFields
                  selectedFeature={selectedFeature}
                  setSelectedFeature={setSelectedFeature}
                />
              </FormProvider>
              <Spacer height={50} />
            </ModalBody>
          ) : (
            <ModalBody>
              <FormProvider {...methods}>
                <ProjectOptionSettingFields />
              </FormProvider>
              <Spacer height="14px" />
            </ModalBody>
          )}
        </AnimatedPageTransition>

        <ModalFooter>
          {renderFooterButtons(
            currentPage,
            selectedFeature,
            onClose,
            handleNextPage,
            handlePreviousPage
          )}
        </ModalFooter>
      </StyledModalContent>
    </>
  );
};

const StyledModalContent = styled(ModalContent)`
  border-radius: 16.23px;
  padding: 0.5em;
  overflow: hidden;
`;
