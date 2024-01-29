import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      src={props.avatar}
      alt='avatar'
      className={styles.avatar}
    />
    <UserTitle
      name={props.name}
      login={props.login}
      created={props.created}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      following={props.following}
      followers={props.followers}
    />
    <UserInfo
      company={props.company}
      location={props.location}
      blog={props.blog}
      twitter={props.twitter}
    />
  </div>
);
