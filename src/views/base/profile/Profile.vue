<template>
  <div>
      <CCard class="profile-main-card">
        <CCardHeader class="profile-main-card__header">
            <CDropdown
                color="link"
                size="lg"
                :caret="false"
                class="u-text-right u-color-white">
                <template #toggler-content>
                    <i class="fas fa-ellipsis-h"></i>
                </template>
                <CDropdownItem>Editar Perfil</CDropdownItem>
                <CDropdownItem>Excluir Perfil</CDropdownItem>
            </CDropdown>
            <img :src="user.picture" alt="" class="profile-pic">
            <h5 class="profile-name">{{ user.name }}</h5>
            <role-badge :role="user.role"></role-badge>
        </CCardHeader>
        <CCardBody class="profile-main-card__body">
            <div class="u-display-flex u-justify-content-center resume-cards">
                <div class="u-width-100 u-display-flex u-justify-content-center u-direction-row u-flex-wrap">
                    <list-my-activities :username="username" class="resume-cards__card"></list-my-activities>
                </div>
                <div class="u-width-100 u-display-flex u-justify-content-center u-direction-row u-flex-wrap">
                    <list-my-health-questionnare :username="username" class="resume-cards__card"></list-my-health-questionnare>
                    <list-my-last-places :username="username" class="resume-cards__card"></list-my-last-places>
                </div>
            </div>
        </CCardBody>
      </CCard>
  </div>
</template>

<script src="./profile.js"></script>