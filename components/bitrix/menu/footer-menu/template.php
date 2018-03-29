<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>

<?
$previousLevel = 0;
foreach($arResult as $arItem):?>

	<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
		<?=str_repeat("</ul></div>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
	<?endif?>

	<?if ($arItem["IS_PARENT"]):?>

		<?if ($arItem["DEPTH_LEVEL"] == 1):?>
			<div class="col-sm-2"><a href="<?=$arItem["LINK"]?>"><h3><?=$arItem["TEXT"]?></h3></a>
				<ul>
		<?else:?>
			<div class="col-sm-2"><a href="<?=$arItem["LINK"]?>"><h3><?=$arItem["TEXT"]?></h3></a>
				<ul>
		<?endif?>

	<?else:?>

		<?if ($arItem["PERMISSION"] > "D"):?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<div class="col-sm-2"><h3><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></h3>
				<?if($arItem["TEXT"] == 'Контакты'):?>
					<p><b>Тюрнина Светлана Николаевна, директор выставки</b><br />
					Тел./факс: (812) 777-04-07, 718-35-37 (доб. 643)<br />
					E-mail: st@farexpo.ru</p>

					<p><b>Гуськова Ольга Алексеевна, администратор выставки</b><br />
					Тел./факс: (812) 777-04-07, 718-35-37 (доб. 642)<br />
					E-mail: gas2@farexpo.ru</p>

					<p><b>Елисеева Юлия Юрьевна, менеджер по маркетингу и рекламе</b><br />
					Тел./факс: (812) 777-04-07, 718-35-37 (доб. 615)<br />
					E-mail: adv@farexpo.ru</p>
				<?endif;?>
				</div>
			<?else:?>
				<?if ($arItem["TEXT"] == "divider"):?>
					<li class="divider"></li>
				<?else:?>
					<li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
				<?endif?>
			<?endif?>

		<?else:?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<li><a href="" class="<?if ($arItem["SELECTED"]):?>root-item-selected<?else:?>root-item<?endif?>" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
			<?else:?>
				<li><a href="" class="denied" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
			<?endif?>

		<?endif?>

	<?endif?>

	<?$previousLevel = $arItem["DEPTH_LEVEL"];?>

<?endforeach?>

<?if ($previousLevel > 1)://close last item tags?>
	<?=str_repeat("</ul></div>", ($previousLevel-1) );?>
<?endif?>
<?endif?>