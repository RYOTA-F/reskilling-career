import { H1, H2 } from '@/components/Elements/Heading'
import Label from '@/components/Elements/Label'
import List from '@/components/Elements/List'
import { PROFILE } from './const'

export default function ProfileDetail() {
  return (
    <section className="w-full text-gray-text-t3">
      <H1>{PROFILE.TITLE}</H1>
      <p className="my-[60px] px-5 leading-[2.5]">{PROFILE.DESCRIPTION}</p>
      {/* 概要 */}
      <H2>{PROFILE.ABOUT.TITLE}</H2>
      <div className="px-5">
        <p className="leading-[2.5]">{PROFILE.ABOUT.CONTENT}</p>
        <div className="mt-5 mb-10">
          <Label>{PROFILE.ABOUT.LABEL}</Label>
          <div className="mt-2">
            <List list={PROFILE.ABOUT.LIST.map<string>((v) => v)} />
          </div>
        </div>
      </div>
      {/* 目的 */}
      <H2>{PROFILE.PURPOSE.TITLE}</H2>
      <div className="px-5">
        <p className="leading-[2.5]">{PROFILE.PURPOSE.CONTENT}</p>
      </div>
      {/* 技術スタック
      <H2>{PROFILE.SKILL.TITLE}</H2>
      <div className="px-5">

        <Label>{PROFILE.SKILL.FRONT_END.LABEL}</Label>
        <div className="mt-2">
          <List list={PROFILE.SKILL.FRONT_END.LIST.map<string>((v) => v)} />
        </div>

        <div className="mt-5 mb-10">
          <Label>{PROFILE.SKILL.BACK_END.LABEL}</Label>
          <div className="mt-2">
            <List list={PROFILE.SKILL.BACK_END.LIST.map<string>((v) => v)} />
          </div>
        </div>

        <div className="mt-5 mb-10">
          <Label>{PROFILE.SKILL.INFRA.LABEL}</Label>
          <div className="mt-2">
            <List list={PROFILE.SKILL.INFRA.LIST.map<string>((v) => v)} />
          </div>
        </div>
      </div> */}
    </section>
  )
}
