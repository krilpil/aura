import { EventRequestModalTrigger } from '@/features/EventRequest';

import { lasertagTariffs } from '../model/lasertagTariffs';
import {
  SDayLabel,
  STariffCapacity,
  STariffPrice,
  STariffActions,
  STariffsActions,
  STariffs,
  STariffsTable,
  STariffsTitle,
} from './lasertagTariffs.styles';

export const LasertagTariffs = () => (
  <STariffs aria-labelledby="lasertag-tariffs-title">
    <STariffsTitle id="lasertag-tariffs-title">Тарифы на лазертаг</STariffsTitle>
    <STariffsTable role="table" aria-labelledby="lasertag-tariffs-title">
      <thead role="rowgroup">
        <tr role="row">
          <th scope="col" role="columnheader">
            Формат
          </th>
          <th scope="col" role="columnheader">
            Условия
          </th>
          <th scope="col" role="columnheader">
            Будни (Пн–Пт)
          </th>
          <th scope="col" role="columnheader">
            Выходные и праздники (Сб–Вс)
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        {lasertagTariffs.map((tariff) => (
          <tr key={tariff.id} role="row">
            <th scope="row" role="rowheader">
              {tariff.title}
              <STariffActions>
                <EventRequestModalTrigger
                  variant="text"
                  requestType="activities"
                  initialValues={{ activity: 'Лазертаг', tariff: tariff.title }}
                >
                  Выбрать тариф
                </EventRequestModalTrigger>
              </STariffActions>
            </th>
            <td role="cell">
              <STariffCapacity>{tariff.capacity}</STariffCapacity>
              {tariff.description}
            </td>
            <td role="cell">
              <SDayLabel aria-hidden="true">Будни (Пн–Пт)</SDayLabel>
              <STariffPrice>{tariff.weekdayPrice}</STariffPrice>
            </td>
            <td role="cell">
              <SDayLabel aria-hidden="true">Выходные и праздники (Сб–Вс)</SDayLabel>
              <STariffPrice>{tariff.weekendPrice}</STariffPrice>
            </td>
          </tr>
        ))}
      </tbody>
    </STariffsTable>
    <STariffsActions>
      <EventRequestModalTrigger
        requestType="activities"
        variant="primary"
        initialValues={{ activity: 'Лазертаг' }}
      >
        Уточнить дату и забронировать
      </EventRequestModalTrigger>
    </STariffsActions>
  </STariffs>
);
