import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { Author, Image, SocialLink } from 'types/api'
import { getImageUrl } from 'utils/getImagaUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}


const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  socialLinks,
  description,
}) => (
  <S.Card key={name}>
    <S.Image>
      <img
        src={getImageUrl(photo.url)}
        loading="lazy"
        alt={name}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({title, url }) => (
        <S.Link key={url}>
          <a href={url} title={title}>
            {icons[title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
