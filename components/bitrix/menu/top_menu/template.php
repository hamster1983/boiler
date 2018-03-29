<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<nav class="navbar">
    <div class="navbar-header">
      <span class="datemob"><b>2 - 5 октября 2018 года</b></span>
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".js-navbar">
            <img src="<?=SITE_TEMPLATE_PATH?>/img/molniya.png" alt="" />
          </button>
    </div>
	<div class="collapse navbar-collapse js-navbar">
<ul class="nav navbar-nav">

<?
$previousLevel = 0;
foreach($arResult as $arItem):?>

	<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
	<?=str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
	<?endif?>

	<?if ($arItem["IS_PARENT"]):?>

		<?if ($arItem["DEPTH_LEVEL"] == 1):?>
			<li class="dropdown"><a href="<?=$arItem["LINK"]?>" data-toggle="dropdown" class="dropdown-toggle"><?=$arItem["TEXT"]?> <span class="caret"></span></a>
				<ul class="dropdown-menu">
		<?else:?>
			<li<?if ($arItem["SELECTED"]):?> class="dropdown"<?endif?>><a href="<?=$arItem["LINK"]?>" data-toggle="dropdown" class="dropdown-toggle"><?=$arItem["TEXT"]?> <span class="caret"></span></a>
				<ul class="dropdown-menu">
		<?endif?>

	<?else:?>

		<?if ($arItem["PERMISSION"] > "D"):?>

			<?if ($arItem["DEPTH_LEVEL"] == 1):?>
				<li class="non-dropdown"><a class="non-dropdown-toggle" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
			<?else:?>
				<li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
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
<?=str_repeat("</ul></li>", ($previousLevel-1) );?>
<?endif?>

</ul>
  </div>
</nav>
<?endif?>