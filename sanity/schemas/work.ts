import { defineField, defineType } from 'sanity';

export const work = defineType({
  name: 'work',
  title: '作品',
  type: 'document',
  fields: [
    defineField({
      name: 'workId',
      title: '作品ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: '英語タイトル',
      type: 'string',
    }),
    defineField({
      name: 'titleJa',
      title: '日本語タイトル',
      type: 'string',
    }),
    defineField({
      name: 'commentEn',
      title: '英語コメント',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'commentJa',
      title: '日本語コメント',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: '作品画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'series',
      title: '所属シリーズ',
      type: 'reference',
      to: [{ type: 'series' }],
    }),
    defineField({
      name: 'sortOrder',
      title: '表示順',
      type: 'number',
    }),
    defineField({
      name: 'published',
      title: '公開する',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'titleJa',
      subtitle: 'workId',
      media: 'image',
    },
  },
});
