import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import accordion from './accordion.md';

storiesOf('accordion', module)
  .add(
    'open accordion',
    () => {
      return {
        template: hbs`
          {{#bourbon-accordion}}
            {{bourbon-accordion-item listItem=accordionItemOne}}
            {{bourbon-accordion-item listItem=accordionItemTwo}}
            {{bourbon-accordion-item listItem=accordionItemThree}}
          {{/bourbon-accordion}}`,
        context: {
          accordionItemOne: {
            header: 'Chompsky the only Brussels Griffon',
            body:
              'Doggo ipsum extremely cuuuuuute heck doge smol borking doggo with a long snoot for pats, you are doing me a frighten wow very biscit. Very hand that feed shibe smol yapper, boof. Shibe most angery pupper I have ever seen the neighborhood pupper pupperino floofs, very hand that feed shibe shooberino maximum borkdrive. Wow such tempt ur givin me a spook very good spot ruff, you are doing me the shock. Pupperino snoot heck what a nice floof shooberino pats, super chub you are doing me the shock pupper I am bekom fat, puggorino heckin good boys heckin many pats. Very taste wow ruff big ol pupper what a nice floof, floofs borkdrive, clouds most angery pupper I have ever seen. Woofer bork doggo stop it fren doggo most angery pupper I have ever seen, wrinkler very jealous pupper noodle horse puggorino fluffer blop, heckin good boys and girls heckin doggo shoober.',
            open: true
          },
          accordionItemTwo: {
            header: 'Memphis the other Brussels Griffon',
            body:
              'Doggo ipsum extremely cuuuuuute heck doge smol borking doggo with a long snoot for pats, you are doing me a frighten wow very biscit. Very hand that feed shibe smol yapper, boof. Shibe most angery pupper I have ever seen the neighborhood pupper pupperino floofs, very hand that feed shibe shooberino maximum borkdrive. Wow such tempt ur givin me a spook very good spot ruff, you are doing me the shock. Pupperino snoot heck what a nice floof shooberino pats, super chub you are doing me the shock pupper I am bekom fat, puggorino heckin good boys heckin many pats. Very taste wow ruff big ol pupper what a nice floof, floofs borkdrive, clouds most angery pupper I have ever seen. Woofer bork doggo stop it fren doggo most angery pupper I have ever seen, wrinkler very jealous pupper noodle horse puggorino fluffer blop, heckin good boys and girls heckin doggo shoober.',
            open: true
          },
          accordionItemThree: {
            header: 'Macho the Frenchie who is so Frenchie',
            body:
              'pats very jealous pupper big ol pupper. Borkf heck heckin good boys vvv big ol pupper what a nice floof I am bekom fat shibe snoot doggorino, shoober heckin good boys wow such tempt borkf porgo h*ck ruff. Smol borking doggo with a long snoot for pats ur givin me a spook borking doggo long doggo long woofer, tungg doggo porgo, noodle horse very good spot very hand that feed shibe. Waggy wags much ruin diet you are doing me the shock, many pats.',
            open: true
          }
        }
      };
    },
    {
      notes: { markdown: accordion }
    }
  )

  .add('closed accordion', () => {
    return {
      template: hbs`
          {{#bourbon-accordion}}
            {{bourbon-accordion-item listItem=accordionItemOne}}
            {{bourbon-accordion-item listItem=accordionItemTwo}}
            {{bourbon-accordion-item listItem=accordionItemThree}}
          {{/bourbon-accordion}}`,
      context: {
        accordionItemOne: {
          header: 'Chompsky the only Brussels Griffon',
          body:
            'Doggo ipsum extremely cuuuuuute heck doge smol borking doggo with a long snoot for pats, you are doing me a frighten wow very biscit. Very hand that feed shibe smol yapper, boof. Shibe most angery pupper I have ever seen the neighborhood pupper pupperino floofs, very hand that feed shibe shooberino maximum borkdrive. Wow such tempt ur givin me a spook very good spot ruff, you are doing me the shock. Pupperino snoot heck what a nice floof shooberino pats, super chub you are doing me the shock pupper I am bekom fat, puggorino heckin good boys heckin many pats. Very taste wow ruff big ol pupper what a nice floof, floofs borkdrive, clouds most angery pupper I have ever seen. Woofer bork doggo stop it fren doggo most angery pupper I have ever seen, wrinkler very jealous pupper noodle horse puggorino fluffer blop, heckin good boys and girls heckin doggo shoober.'
        },
        accordionItemTwo: {
          header: 'Memphis the other Brussels Griffon',
          body:
            'Doggo ipsum extremely cuuuuuute heck doge smol borking doggo with a long snoot for pats, you are doing me a frighten wow very biscit. Very hand that feed shibe smol yapper, boof. Shibe most angery pupper I have ever seen the neighborhood pupper pupperino floofs, very hand that feed shibe shooberino maximum borkdrive. Wow such tempt ur givin me a spook very good spot ruff, you are doing me the shock. Pupperino snoot heck what a nice floof shooberino pats, super chub you are doing me the shock pupper I am bekom fat, puggorino heckin good boys heckin many pats. Very taste wow ruff big ol pupper what a nice floof, floofs borkdrive, clouds most angery pupper I have ever seen. Woofer bork doggo stop it fren doggo most angery pupper I have ever seen, wrinkler very jealous pupper noodle horse puggorino fluffer blop, heckin good boys and girls heckin doggo shoober.'
        },
        accordionItemThree: {
          header: 'Macho the Frenchie who is so Frenchie',
          body:
            'pats very jealous pupper big ol pupper. Borkf heck heckin good boys vvv big ol pupper what a nice floof I am bekom fat shibe snoot doggorino, shoober heckin good boys wow such tempt borkf porgo h*ck ruff. Smol borking doggo with a long snoot for pats ur givin me a spook borking doggo long doggo long woofer, tungg doggo porgo, noodle horse very good spot very hand that feed shibe. Waggy wags much ruin diet you are doing me the shock, many pats.'
        }
      }
    }
  },
  {
    notes: { markdown: accordion }
  })
